'use client';

import { motion } from "motion/react";
import Link from "next/link";

export default function Header() {

    const links = [
        { label: "About", href: "./about" },
        { label: "Resources", href: "./resources" }
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-40">
            <div className="relative max-w-6xl mx-auto px-6 h-20 flex items-center">
                <Link href="/" className="flex items-center">
                    <span className="text-lg font-semibold tracking-tight">Kilowhen</span>
                </Link>
                <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                    {links.map((link, index) => (
                        <motion.div
                            key={link.label}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.07, duration: 0.3 }}
                            className="p-5 mx-auto"
                        >
                            <Link
                                href={link.href}
                                className="text-base text-foreground px-3 py-1.5 rounded-lg hover:bg-foreground/20 hover:dark:bg-sky-900 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </nav>
            </div>
        </header>
    )
}