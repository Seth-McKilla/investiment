"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useSession, signIn } from "next-auth/react";

import Avatar from "./Avatar";
import Button from "./components/Button";
import { classNames } from "utils/styles";

export default function MenuUser() {
  const { data: session } = useSession();

  return session?.user ? (
    <Menu as="div" className="relative ml-3">
      <Menu.Button className="flex items-center justify-center w-12 h-12 text-xl bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <Avatar />
      </Menu.Button>
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
    <Link href="/signin">
      <Button>Sign in</Button>
    </Link>
  );
}
