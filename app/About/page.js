import React from "react";
import Link from "next/link";

function About() {
  return (
    <div className="flex justify-center mt-11 flex-col items-center">
      <p className="text-xl">
        Hey, You are Welcome to <span className="text-2xl">About</span> Page
      </p>
      <p className="mt-4">
        Go to
        <Link href="/Gallery" className="font-medium ml-1">
          Gallery
        </Link>
      </p>
    </div>
  );
}

export default About;
