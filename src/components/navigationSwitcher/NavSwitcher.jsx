"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Topbar from "@/components/topbar/Topbar";
import Header from "../header/Header";

export default function NavSwitcher({data}) {
  const pathname = usePathname() || "/";

  // Show Header only on specific paths
  const showHeader = pathname === "/" || 
                     pathname === "/en" || 
                     pathname === "/ur" || 
                     pathname.startsWith("/prescribing-information");
  
  // if (showHeader) {
    return <Header data={data} />;
  // }

  // return <Topbar />;
}