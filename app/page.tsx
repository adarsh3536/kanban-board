"use client";

import React from "react";
import Cards from "@/app/components/card/Cards";
import ModalComponent from "./components/modal/ModalComponent";

function page() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="header bg-white w-3/4 my-10 py-8 px-5 rounded-2xl flex items-center justify-center justify-between">
          <h1 className="text-2xl ">Desktop & Mobile Application</h1>
          <ModalComponent />
        </div>
      </div>
      <Cards />
    </>
  );
}

export default page;
