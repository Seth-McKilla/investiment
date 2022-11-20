import Link from "next/link";

import Container from "./components/Container";
import MenuUser from "./MenuUser";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <Container>
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center flex-1 sm:justify-start">
            <Link href="/" className="text-2xl font-bold text-white">
              LOGO
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <MenuUser />
          </div>
        </div>
      </Container>
    </nav>
  );
}
