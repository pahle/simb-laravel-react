import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex justify-between w-full">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("home")}
                                    active={route().current("home")}
                                >
                                    BERANDA
                                </NavLink>
                                <NavLink
                                    href={route("mitigation")}
                                    active={route().current("mitigation")}
                                >
                                    MITIGASI
                                </NavLink>
                                <NavLink
                                    href={route("statistics")}
                                    active={route().current("statistics")}
                                >
                                    STATISTIK
                                </NavLink>
                                <NavLink
                                    href={route("report")}
                                    active={route().current("report")}
                                >
                                    LAPORAN
                                </NavLink>
                                <NavLink>
                                    <Link
                                        method={auth.user ? "POST" : "GET"}
                                        href={
                                            auth.user
                                                ? route("logout")
                                                : route("login")
                                        }
                                        as="button"
                                    >
                                        {auth.user ? "LOG OUT" : "LOG IN"}
                                    </Link>
                                </NavLink>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="py-3 border-t border-gray-200">
                        <div className="">
                            <ResponsiveNavLink
                                method={auth.user ? "POST" : "GET"}
                                href={
                                    auth.user ? route("logout") : route("login")
                                }
                                as="button"
                            >
                                {auth.user ? "LOG OUT" : "LOG IN"}
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <section
                id="beranda"
                className="flex md:flex-row flex-col sm:py-16 bg-gradient-to-r from-[#030F6B] to-[#23284F] h-[420px] md:h-[366px] text-center text-sm px-5 sm:p-0"
              >
                <div
                  className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6"
                    >
                  <div className="flex flex-row justify-between items-center w-full text-center">
                    <h1 className="flex-1 mt-[-88px] font-poppins font-semibold text-white ss:text-[72px] xs:text-[52px] text-[48px] ss:leading-[100px] leading-[75px] w-[100%]">
                      {header}
                    </h1>
                  </div>
                </div>
              </section>
            )}

            <main>{children}</main>
        </div>
    );
}
