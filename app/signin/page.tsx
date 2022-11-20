"use client";

import { useSession } from "next-auth/react";

export default function SigninPage() {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <div>
      <h1>Signin Page</h1>
    </div>
  );
}
