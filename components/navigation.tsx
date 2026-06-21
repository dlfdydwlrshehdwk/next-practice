"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav className={styles.nav}>
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