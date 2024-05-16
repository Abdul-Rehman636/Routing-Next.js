import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex w-full justify-center items-center mt-5">
      <div className="flex w-9/12 justify-between items-center">
        <p className="text-3xl">BrandName</p>
        <div className="flex justify-between items-center w-2/4">
          <Link href="/">Home</Link>
          <Link href="About">About</Link>
          <Link href="Gallery">Gallery</Link>
          <Link href="Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
