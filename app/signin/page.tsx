"use client";

import { useSession } from "next-auth/react";

import ButtonGoogle from "./ButtonGoogle";
import Container from "../components/Container";

export default function SigninPage() {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <Container>
      <div className="flex items-center justify-center h-screen">
        <ButtonGoogle />
      </div>
    </Container>
  );
}
