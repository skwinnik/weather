"use client";

import { useEffect } from "react";

function onScroll() {
  const scrollY = window.scrollY;
  if (scrollY > 0) window.document.body.setAttribute("data-scroll", "true");
  else window.document.body.setAttribute("data-scroll", "false");
}

export default function ScrollWatcher() {
  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return <></>;
}
