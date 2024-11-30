"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Navbar-Menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <HoveredLink href="/">Home</HoveredLink>
                <MenuItem setActive={setActive} active={active} item="About">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/css">CSS</HoveredLink>
                        <HoveredLink href="/ddx">DDX</HoveredLink>
                        <HoveredLink href="/samarpan">Samarpan</HoveredLink>
                        <HoveredLink href="/theatre">Theatre</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Events">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/timeline">Upcoming</HoveredLink>
                        <HoveredLink href="/gallery">Gallery</HoveredLink>
                    </div>
                </MenuItem>
                <HoveredLink href="/contact">Contact</HoveredLink>
            </Menu>
        </div>
    );
}
