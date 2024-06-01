"use client";

import React from "react";
import { DrawerBtn } from "./DrawerBtn";
import { ModeToggle } from "./ModeToggle";

const Header: React.FC = () => {
  return (
    <header className="grid border-b py-4 px-4 sm:px-10 dark:bg-dark font-[sans-serif] min-h-[70px] tracking-wide relative z-50  grid-cols-3">
      <div className="text-3xl">Ayman</div>
      <div>
        {" "}
        <ModeToggle />
      </div>
      <div className="flex lg:ml-auto max-lg:w-full">
        <DrawerBtn />
      </div>
    </header>
  );
};

export default Header;
