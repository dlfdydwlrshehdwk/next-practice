"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li><Link className={path === "/" ? "active text-blue-500" : ""} href="/">
                    Home
                </Link></li>
                <li><Link className={path === "/about-us" ? "active text-blue-500" : ""} href="/about-us">
                    About Us
                </Link></li>
            </ul>
        </nav>
    )
}