"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <>
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                {/* <MenuItem setActive={setActive} active={active} item="Home">
                    <div className="flex flex-col text-sm w-32 gap-2">
                        <HoveredLink href="/webdevelopment">Home</HoveredLink>
                        <HoveredLink href="/interface-ui">Interface UI</HoveredLink>
                        <HoveredLink href="/appdevelopment">App development</HoveredLink>
                    </div>
                </MenuItem> */}
                <Link href="/">Home</Link>
                <MenuItem setActive={setActive} active={active} item="Products">
                    <div className="flex flex-col text-sm w-36 gap-2">
                        <HoveredLink href="/frontend-course">FrontEnd Development</HoveredLink>
                        <HoveredLink href="/backend-course">Backend Development</HoveredLink>
                        <HoveredLink href="/fullStack">FullStack Development</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact us">
                    <div className="flex flex-col text-sm w-36 gap-2">
                        <HoveredLink href="/twitter">@twitter</HoveredLink>
                        <HoveredLink href="/youtube">@youtube</HoveredLink>
                        <HoveredLink href="/instagram">@instagram</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    </>
  )
}

export default Navbar
