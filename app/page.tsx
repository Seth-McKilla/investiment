import Link from "next/link";

import Button from "./components/Button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-20">
      <h1 className="mb-4 text-3xl">Welcome to Investiment!</h1>
      <p className="mb-4 text-4xl font-bold text-center h1">
        Effortlessly keep track of market sentiment for your favorite
        securities.
      </p>
      <Link href="/signin">
        <Button>Get started</Button>
      </Link>
    </div>
  );
}
