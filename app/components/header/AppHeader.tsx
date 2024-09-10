import React from "react";
import Image from "next/image";

function AppHeader() {
  return (
    <div className="bg-white w-screen">
      <div className="w-24 ml-3">
        <Image
          src="/images/logo.jpg"
          alt="Board Infinity Logo"
          width={96}
          height={96}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default AppHeader;
