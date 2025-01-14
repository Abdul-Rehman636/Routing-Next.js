import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="flex justify-center mt-11 flex-col items-center">
      <p className="text-xl">
        Hey, You are Welcome to <span className="text-2xl">Home</span> Page
      </p>
      <p className="mt-4">
        Go to
        <Link href="/About" className="font-medium ml-1">
          About
        </Link>
      </p>
    </div>
  );
}

export default Home;
