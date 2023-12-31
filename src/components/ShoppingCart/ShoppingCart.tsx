"use client";
import { Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { HiTrash, HiXMark } from "react-icons/hi2";
import ButtonBorderHover from "../animations/ButtonBorderHover";
import { toggleCartAtom } from "@/libs/jotai/store";
import { useAtom } from "jotai";
import {
  CheckoutProductBody,
  CheckoutSubscriptionBody,
} from "@/app/checkout-sessions/route";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function ShoppingCart() {
  const [open, setOpen] = useAtom(toggleCartAtom);
  const handleClick = async () => {
    // step 1: load stripe
    const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
    const stripe = await loadStripe(STRIPE_PK);

    // step 2: define the data for monthly subscription
    const body: CheckoutProductBody = {
      price: 100,
      name: "Component 1",
      description: "Component 1 description",
    };

    // step 3: make a post fetch api call to /checkout-session handler
    const result = await fetch("/checkout-sessions", {
      method: "post",
      body: JSON.stringify(body, null),
      headers: {
        "content-type": "application/json",
      },
    });

    // step 4: get the data and redirect to checkout using the sessionId
    const data = (await result.json()) as Stripe.Checkout.Session;
    const sessionId = data.id!;
    stripe?.redirectToCheckout({ sessionId });
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-dark-background shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <HiXMark className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 ">
                            {products.map((product) => (
                              <li
                                key={product.id}
                                className={"flex items-center gap-4 mb-4"}
                              >
                                <div
                                  className={
                                    "w-full bg-dark-gray flex justify-between items-center p-6 rounded-2xl"
                                  }
                                >
                                  <div className={"flex gap-6 items-center"}>
                                    <div
                                      className={
                                        "bg-dark-background w-24 h-16 rounded-lg"
                                      }
                                    />
                                    <p className={"text-lg text-white"}>
                                      {product.name}
                                    </p>
                                  </div>
                                  <p className={"text-dark-green text-lg"}>
                                    {product.price}
                                  </p>
                                </div>
                                <div
                                  className={"text-dark-red flex items-center"}
                                >
                                  <HiTrash className={"w-6 h-6 stroke-3"} />
                                </div>
                              </li>
                              // <li
                              //   key={product.id}
                              //   className="bg-dark-gray flex py-6"
                              // >
                              //   <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              //     <img
                              //       src={product.imageSrc}
                              //       alt={product.imageAlt}
                              //       className="h-full w-full object-cover object-center"
                              //     />
                              //   </div>
                              //
                              //   <div className="ml-4 flex flex-1 flex-col">
                              //     <div>
                              //       <div className="flex justify-between text-base font-medium text-gray-900">
                              //         <h6>
                              //           <a href={product.href}>
                              //             {product.name}
                              //           </a>
                              //         </h6>
                              //         <p className="ml-4">{product.price}</p>
                              //       </div>
                              //       <p className="mt-1 text-sm text-gray-500">
                              //         {product.color}
                              //       </p>
                              //     </div>
                              //     <div className="flex flex-1 items-end justify-between text-sm">
                              //       <p className="text-gray-500">
                              //         Qty {product.quantity}
                              //       </p>
                              //
                              //       <div className="flex">
                              //         <button
                              //           type="button"
                              //           className="font-medium text-indigo-600 hover:text-indigo-500"
                              //         >
                              //           Remove
                              //         </button>
                              //       </div>
                              //     </div>
                              //   </div>
                              // </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-dark-gray px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium">
                        <p>Subtotal</p>
                        <p className="text-dark-green">$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-slate-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <ButtonBorderHover
                          borderColor="#fff"
                          onClick={() => handleClick()}
                        >
                          Checkout
                        </ButtonBorderHover>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <Link
                            className="font-medium text-red-600 hover:text-red-500"
                            href="/checkout"
                          >
                            <p>
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </p>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
