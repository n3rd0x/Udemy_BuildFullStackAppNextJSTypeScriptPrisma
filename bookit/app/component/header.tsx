"use client";

import Image from "next/image";
import Link from "next/link";
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineAmazon,
    AiOutlineApple,
    AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { useState } from "react";

export default function Header() {
    const links = [
        { name: "HOME", url: "/" },
        { name: "All Rooms", url: "/api/rooms" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="w-full h-24 shadow-xl bg-green-300">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                {/** Left side */}
                <div className="flex">
                    <Link href="https://nextjs.org/" target="_blank">
                        <Image
                            src="/next.svg"
                            width="120"
                            height="120"
                            alt="Logo Image"
                        />
                    </Link>

                    <Image
                        src="/vercel.svg"
                        width="120"
                        height="120"
                        alt="Vercel Image"
                        className="ml-4"
                    />
                </div>

                {/** Right side */}
                <div className="hidden sm:flex">
                    <ul className="flex">
                        {links.map((item, index) => (
                            <li
                                key={index}
                                className="ml-10 uppercase hover:border-b hover:border-slate-950 hover:text-red-400 text-xl"
                            >
                                <Link href={item.url}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/** Hamburger Menu */}
                <div
                    onClick={handleNav}
                    className="sm:hidden cursor-pointer pl-24"
                >
                    <AiOutlineMenu size="25" />
                </div>
            </div>

            {/** Sidebar */}
            <div
                className={
                    menuOpen
                        ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ccf0f3] p-10 ease-in duration-500 z-50"
                        : "fixed left-[-100%] top-0 w-[65%] sm:hidden h-screen bg-[#ccf0f3] p-10 ease-in duration-500 z-50"
                }
            >
                <div
                    onClick={handleNav}
                    className="flex w-full items-center justify-end"
                >
                    <AiOutlineClose />
                </div>

                {/** Side Menu */}
                <div className="flex-col -py-4">
                    <ul>
                        {links.map((item, index) => (
                            <li
                                onClick={() => setMenuOpen(false)}
                                key={index}
                                className="uppercase py-4 cursor-pointer hover:text-red-400"
                            >
                                <Link href={item.url}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/** Links */}
                <div className="flex flex-row justify-around pt-10 items-center">
                    <Link href="https://www.amazon.com" target="_blank">
                        <AiOutlineAmazon size="30" className="cursor-pointer" />
                    </Link>
                    <Link href="https://www.apple.com" target="_blank">
                        <AiOutlineApple size="30" className="cursor-pointer" />
                    </Link>
                    |
                    <Link href="https://www.instagram.com" target="_blank">
                        <AiOutlineInstagram
                            size="30"
                            className="cursor-pointer"
                        />
                    </Link>
                    <Link href="https://www.facebook.com" target="_blank">
                        <AiOutlineFacebook
                            size="30"
                            className="cursor-pointer"
                        />
                    </Link>
                </div>
                <div className="flex justify-around pt-4">
                    <div className="flex items-center">
                        {process.env.WEBSITE_NAME}
                        <AiOutlineCopyrightCircle size="30" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
