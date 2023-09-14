import { stripe } from "@/libs/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

// data needed for checkout
export interface CheckoutSubscriptionBody {
  plan: string;
  planDescription: string;
  amount: number;
  customerId?: string;
}

export type CheckoutProductBody = {
  name: string;
  description: string;
  price: number;
  customerEmail?: string;
};

export async function POST(req: Request) {
  const body = (await req.json()) as CheckoutProductBody;
  const origin = req.headers.get("origin") || "http://localhost:3000";

  // if user is logged in, redirect to thank you page, otherwise redirect to signup page.
  const success_url = !body.customerEmail
    ? `${origin}/signup?session_id={CHECKOUT_SESSION_ID}`
    : `${origin}/thankyou?session_id={CHECKOUT_SESSION_ID}`;

  try {
    const session = await stripe.checkout.sessions.create({
      // if user is logged in, stripe will set the email in the checkout page
      // customer: body.customerId,
      customer_email: "fabian.rodrez@gmail.com",
      billing_address_collection: "auto",
      mode: "payment", // mode should be subscription
      line_items: [
        // generate inline price and product
        {
          price_data: {
            currency: "usd",
            unit_amount: body.price,
            product_data: {
              name: body.name,
              description: body.description,
            },
          },
          quantity: 1,
        },
      ],
      success_url: success_url,
      cancel_url: `${origin}/cancel?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.json(session);
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return NextResponse.json({ message }, { status: error.statusCode });
    }
  }
}
