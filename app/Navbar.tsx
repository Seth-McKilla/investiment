import Link from "next/link";

import MenuUser from "./MenuUser";

export default function Navbar() {
  const auth = true;

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
              <MenuUser />
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
