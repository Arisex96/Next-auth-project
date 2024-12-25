"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Correct import for App Router

const Appbar = () => {
  console.log("Appbar-------------");

  const router = useRouter();

  const session = useSession();
  console.log("session->");
  console.log(session.data?.user);

  return (
    <div className="flex justify-between items-center p-4 mb-2 border-2">
      <div>Myapp</div>
      <div
        className="text-lg font-semibold cursor-pointer"
        onClick={() => router.push("/")}
      >
        Home
      </div>
      <div
        className="text-lg font-semibold cursor-pointer"
        onClick={() => router.push("/signin")}
      >
        Signin
      </div>
      <div
        className="text-lg font-semibold cursor-pointer"
        onClick={() => signOut()}
      >
        Signout
      </div>
    </div>
  );
};

export default Appbar;
