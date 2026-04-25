"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Topbar from "@/components/topbar/Topbar";
import Header from "@/components/header/Header";

export default function NavSwitcher({ data }) {
  const pathname = usePathname() || "/";

  // Show Header only on root path, otherwise show Topbar
  if (pathname === "/faq" || pathname === "/inperson-care" || pathname === "/patient-toolkit" || pathname === "/research-papers" || pathname === "/doctor" || pathname === "/ur" || pathname === "/en" || pathname === "/mechanism-action" || pathname === "/video-library" || pathname === "/proven-result" || pathname === "/patient-toolkit" || pathname === "/prescribing-information" || "/health-blog") {
    return <Header data={data} />;
  }

  return <Topbar />;
}
