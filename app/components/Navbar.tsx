"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

import { classNames } from "utils/styles";

export default function Navbar() {
  const auth = false;

  return (
    <nav className="bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center flex-1 sm:justify-start">
            <Link href="/" className="text-2xl font-bold text-white">
              LOGO
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {auth ? (
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex items-center justify-center w-12 h-12 text-xl bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    SM
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 w-48 pt-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/profile"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-3 text-sm text-gray-700"
                          )}
                        >
                          Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Menu.Button
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm w-full bg-indigo-600 text-white rounded-b-md hover:bg-indigo-700"
                          )}
                          onClick={() => console.log("Sign Out")}
                        >
                          Sign out
                        </Menu.Button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link
                href="/signin"
                className="px-3 py-3 text-white bg-indigo-600 rounded-lg text-md hover:bg-indigo-700"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
