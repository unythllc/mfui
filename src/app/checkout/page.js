"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

stripePromise.then((res) => console.log(res));

export default function PreviewPage() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready.",
      );
    }
  }, []);

  return (
    <form action="/api/checkout_sessions" method="POST">
      <section className="bg-white flex flex-col w-[400px] h-[112px] rounded-xl justify-between">
        <button
          type="submit"
          role="link"
          className="h-10 bg-dark-red rounded-md cursor-pointer font-semibold text-white border-none hover:opacity-80 transition ease-in"
        >
          Checkout
        </button>
      </section>
    </form>
  );
}
