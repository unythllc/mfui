"use client";
import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown(props: any) {
  const [selected, setSelected] = useState(props.default);

  const handleChange = (e: any, name: string) => {
    setSelected(e);
    props.handleChange(e, name);
  };

  return (
    <Listbox
      value={selected}
      onChange={(e: any) => handleChange(e, props.name)}
    >
      {({ open }) => (
        <div className={"w-full"}>
          {/* <Listbox.Label className="block text-4xl text-center font-black text-white">COST</Listbox.Label> */}
          <div className="mt-1 relative w-full">
            <Listbox.Button
              className={
                "text-white font-bold relative w-full border-0 rounded-md shadow-sm pl-3 pr-10 text-left cursor-default focus:outline-none focus:ring-0 sm:text-xl " +
                (props.heightAndBG ? props.heightAndBG : "bg-arcade-card h-10")
              }
            >
              <span
                className={
                  "block truncate " +
                  (props.textAlignment ? props.textAlignment : "text-center")
                }
              >
                {selected === "-" ? props.default : selected}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none text-arcade-green">
                {/* <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={"h-6 w-6 " + (open ? "transform rotate-180" : "")}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 text-center w-full border-2 bg-arcade-dark-gray border-arcade-border shadow-lg max-h-72 rounded-md py-1 px-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {props.items.map((item: any) => (
                  <Listbox.Option
                    key={item}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-white bg-arcade-card rounded font-bold"
                          : "text-white",
                        "cursor-default select-none relative py-2",
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <div>
                        <span
                          className={classNames(
                            selected
                              ? "font-semibold text-white"
                              : "font-normal",
                            "block truncate",
                          )}
                        >
                          {item}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-arcade-green   ",
                              "absolute inset-y-0 right-0 flex items-center",
                            )}
                          >
                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                          </span>
                        ) : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
