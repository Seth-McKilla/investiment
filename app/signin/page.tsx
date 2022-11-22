"use client";

import { useSession } from "next-auth/react";

import ButtonGoogle from "./ButtonGoogle";
import Card from "../components/Card";

export default function SigninPage() {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center justify-center h-screen -mt-20">
      <Card>
        <p className="flex justify-center mb-6 text-2xl">Sign in</p>
        <ButtonGoogle />
      </Card>
    </div>
  );
}
