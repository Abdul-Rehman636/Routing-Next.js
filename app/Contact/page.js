import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <div className="flex justify-center mt-11 flex-col items-center">
      <p className="text-xl">
        Hey, You are Welcome to <span className="text-2xl">Contact</span> Page
      </p>
      <p className="mt-4">
        Go to
        <Link href="/" className="font-medium ml-1">
          Home
        </Link>
      </p>
    </div>
  );
}

export default Contact;
