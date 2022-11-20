import Link from "next/link";

import Button from "./components/Button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-20">
      <h1 className="mb-4 text-3xl">Welcome to Investiment!</h1>
      <p className="mb-4 text-4xl font-bold h1">
        Sentiment analyses of the masses for your favorite stock picks
      </p>
      <Link href="/signin">
        <Button>Get started</Button>
      </Link>
    </div>
  );
}
