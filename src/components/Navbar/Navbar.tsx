"use client";
import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { CartIcon, MFUILogo, UserIcon } from "@/icons/mfui";
// import { clearAuth, setIsAuthenticated } from "../app/auth/authSlice";
// import { setUrl } from "../app/activity/activitySlice"

export default function Navbar() {
  const [show, setShow] = useState(null);
  const [current, setCurrent] = useState("templates");
  // const dispatch = useDispatch();

  const isAuthenticated = false;
  const handleClick = (e: any) => {
    console.log(e.target.name);
  };

  const logout = () => {
    localStorage.removeItem("token");
    // dispatch(clearAuth());
    // dispatch(setIsAuthenticated(false));
  };

  // const user = useSelector((state) => state.auth.username);
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const totalItems = useSelector((state) => state.cart.totalItems);
  // const url = useSelector((state) => state.activity.url);

  return (
    <div className="h-full w-full">
      {/* Code block starts */}
      <nav className="text-white xl:block hidden fixed top-0 flex w-full z-10 h-24 py-4 bg-dark-background border-b-4 border-dark-red">
        <div className="mx-auto container px-12 py-2 xl:py-0">
          <div className="flex items-center justify-between">
            <div className="inset-y-0 left-0 flex items-center xl:hidden">
              <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                <div className="visible xl:hidden">
                  <ul className="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
                    <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <span className="ml-2">WEBSITE TEMPLATES</span>
                      </div>
                    </li>
                    <li className="flex xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                      <div className="flex items-center">
                        <span className="ml-2">COMPONENTS</span>
                      </div>
                    </li>
                    <li className="border-b border-gray-300 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                      <span className="ml-2">CONTACT US</span>
                    </li>
                  </ul>
                  <svg
                    aria-haspopup="true"
                    aria-label="Main Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="show-m-menu icon icon-tabler icon-tabler-menu"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                </div>
                <div className="hidden close-m-menu text-gray-700">
                  <svg
                    aria-label="Close"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
              <Link href="/">
                <div
                  onClick={() => setCurrent("home")}
                  className="flex items-center cursor-pointer"
                >
                  <MFUILogo className={"h-16 w-16 text-dark-red"} />
                  {/* <h2
                                        onClick={() => setCurrent('home')}
                                        name="home"
                                        className="hidden sm:block text-2xl text-dark-red font-black leading-normal pl-3">MFUi</h2> */}
                </div>
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="hidden xl:flex md:ml-20  items-center gap-x-20 text-xl font-medium cursor-pointer">
                <Link
                  href="#"
                  className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                >
                  <div className={"relative flex flex-col"}>
                    <span
                      onClick={() => setCurrent("templates")}
                      className="mr-2"
                    >
                      Website Templates
                    </span>
                    {current === "templates" && (
                      <span
                        className={
                          "absolute mt-6 text-4xl ml-16 text-dark-red font-sans"
                        }
                      >
                        &bull;
                      </span>
                    )}
                  </div>
                </Link>
                <Link
                  href="#"
                  className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                >
                  <div className={"relative flex flex-col cursor-pointer"}>
                    <span
                      onClick={() => setCurrent("components")}
                      className="mr-2"
                    >
                      Components
                    </span>
                    {current === "components" && (
                      <span
                        className={
                          "absolute mt-6 text-4xl ml-12 text-dark-red font-sans"
                        }
                      >
                        &bull;
                      </span>
                    )}
                  </div>
                </Link>
                <Link
                  href="/contact-us"
                  className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                >
                  <div className={"relative flex flex-col cursor-pointer"}>
                    <span
                      onClick={() => setCurrent("contactus")}
                      className="mr-2"
                    >
                      Contact Us
                    </span>
                    {current === "contactus" && (
                      <span
                        className={
                          "absolute mt-6 text-4xl ml-10 text-dark-red font-sans"
                        }
                      >
                        &bull;
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidden xl:flex items-center gap-8">
              <div className="ml-6 relative cursor-pointer">
                <Link href="/checkout">
                  <button className={"relative bg-transparent"}>
                    <CartIcon className={"h-10 w-10 mr-4 text-white"} />
                    <div
                      className={
                        "absolute top-0 right-2 rounded-full bg-dark-green h-6 w-6 text-black"
                      }
                    >
                      10
                    </div>
                  </button>
                </Link>
              </div>

              {isAuthenticated ? (
                <div>
                  {/* {url === 'account' ? (
                                            <div>
                                                <button
                                                    onClick={
                                                        () => logout()
                                                    }
                                                    className={"px-8 py-2 bg-dark-red rounded-full"}>
                                                    Logout
                                                </button>
                                            </div>
                                        ) : ( */}
                  <div className="relative md:ml-6 my-2">
                    <Link href="/account">
                      <button
                        onClick={() => {
                          dispatch(setUrl("account"));
                        }}
                      >
                        <UserIcon
                          className={"relative h-10 w-10 text-dark-red"}
                        />
                      </button>
                    </Link>
                    {/* <button
                                                    onClick={
                                                        () => logout()
                                                    }
                                                    className={"px-8 py-2 bg-dark-red rounded-full"}>
                                                    Logout
                                                </button> */}
                  </div>
                  {/* )} */}
                </div>
              ) : (
                <div className="relative md:mr-6 my-2">
                  <Link href="/account/signin">
                    <button className="focus:outline-none bg-dark-red transition duration-150 ease-in-out hover:bg-red-500 rounded-full text-white px-16 py-2 font-bold">
                      LOGIN
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav>
        <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-dark-background fixed top-0 z-40">
          <Link href="/">
            <div
              onClick={() => setCurrent("home")}
              className="flex items-center cursor-pointer"
            >
              <MFUILogo className={"h-16 w-16 text-dark-red"} />
              {/* <h2
                                        onClick={() => setCurrent('home')}
                                        name="home"
                                        className="hidden sm:block text-2xl text-dark-red font-black leading-normal pl-3">MFUi</h2> */}
            </div>
          </Link>
          <div className="flex items-center">
            <div className="relative mr-6 ">
              <Link href="/account/signin">
                <button className="focus:outline-none bg-dark-red border-gray-300 border transition duration-150 ease-in-out hover:bg-red-500 rounded text-white px-10 py-2 text-xs">
                  LOGIN
                </button>
              </Link>
            </div>
            <div
              id="menu"
              className="text-gray-800"
              onClick={() => setShow(!show)}
            >
              {show ? (
                ""
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2 text-dark-gray-text"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={4} y1={6} x2={20} y2={6} />
                  <line x1={4} y1={12} x2={20} y2={12} />
                  <line x1={4} y1={18} x2={20} y2={18} />
                </svg>
              )}
            </div>
          </div>
        </div>
        {/*Mobile responsive sidebar*/}
        <div
          className={
            show
              ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 "
              : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
          }
        >
          <div
            className="bg-gray-800 opacity-50 w-full h-full"
            onClick={() => setShow(!show)}
          />
          <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
            <div className="px-6 h-full">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex items-center justify-between w-full">
                      <Link href="/">
                        <div className="flex items-center">
                          <p className="text-2xl text-dark-red ml-3">MFUi</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <ul className="f-m-m">
                    <a className="cursor-pointer">
                      <li className="text-gray-800 pt-10">
                        <div className="flex items-center">
                          <p className="text-indigo-700 xl:text-base text-base ml-3">
                            TEMPLATES
                          </p>
                        </div>
                      </li>
                    </a>
                    <a className="cursor-pointer">
                      <li className="text-gray-800 pt-8">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                              COMPONENTS
                            </p>
                          </div>
                        </div>
                      </li>
                    </a>
                    <a className="cursor-pointer">
                      <li className="text-gray-800 pt-8">
                        <div className="flex items-center">
                          <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                            DOCUMENTATION
                          </p>
                        </div>
                      </li>
                    </a>
                    <Link href="/contact-us">
                      <li className="text-gray-800 pt-8 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                              CONTACT US
                            </p>
                          </div>
                        </div>
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="w-full pt-4">
                  <div className="flex justify-center mb-4 w-full">
                    <div className="relative w-full">
                      <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-search"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={10} cy={10} r={7} />
                          <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                      </div>
                      <input
                        className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="border-t border-gray-300">
                    <div className="w-full flex items-center justify-between pt-1">
                      <div className="flex items-center">
                        <div className="ml-6 relative">
                          <Link href="/checkout">
                            <button>
                              <CartIcon
                                className={"h-10 w-10 mr-4 text-white"}
                              />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Code block ends */}
    </div>
  );
}
