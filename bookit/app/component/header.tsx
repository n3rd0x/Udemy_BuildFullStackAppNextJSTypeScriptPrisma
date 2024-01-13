import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
    const links = [
        { name: "HOME", url: "/" },
        { name: "All Rooms", url: "/api/rooms" },
    ];

    return (
        <nav className="sticky top-0 bg-green-400 pb-2">
            <div className="flex items-center p-2 mb-2">
                <div className="mr-4">
                    <Link href="https://nextjs.org/" target="_blank">
                        <Image
                            src="/next.svg"
                            width={120}
                            height={120}
                            alt="Logo Image"
                        />
                    </Link>
                </div>
                <div>
                    <Image
                        src="/vercel.svg"
                        width={120}
                        height={120}
                        alt="Vercel Image"
                    />
                </div>
            </div>

            <div className="container mx-auto">
                <ul className="ml-4 space-x-4">
                    {links.map((item, index) => (
                        <li key={index} className="inline-block">
                            <Link
                                className="hover:text-gray-300"
                                href={item.url}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
