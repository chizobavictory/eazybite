import Link from "next/link";
import React from "react";
import '../app/globals.css' 

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between dotted-pattern border-t-2 border-t-red-500 ">
      <Link href="/" className="font-bold text-xl">EAZYBITE</Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
