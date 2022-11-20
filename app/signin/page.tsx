"use client";

import { useSession } from "next-auth/react";

import ButtonGoogle from "./ButtonGoogle";
import Card from "../components/Card";
import Container from "../components/Container";

export default function SigninPage() {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <Container>
      <div className="flex items-center justify-center h-screen">
        <Card>
          <p className="flex justify-center mb-6 text-2xl">Sign in</p>
          <ButtonGoogle />
        </Card>
      </div>
    </Container>
  );
}
