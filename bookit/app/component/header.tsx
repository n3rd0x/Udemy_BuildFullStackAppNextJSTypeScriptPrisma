import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="m-5">
            <div className="flex items-center">
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
        </header>
    );
}
