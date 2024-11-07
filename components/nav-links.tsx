"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={
            pathname === href ? "text-blue-700 font-bold" : "text-gray-500"
          }
        >
          {label}
        </Link>
      ))}
    </>
  );
}
