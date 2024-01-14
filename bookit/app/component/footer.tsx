import Link from "next/link";

export default function Footer() {
    const date = new Date().toISOString();
    return (
        <footer className="flex m-5 justify-center items-center">
            <p className="text-sm">
                <Link
                    href="https://www.udemy.com/course/nextjs-build-full-stack-apps-with-nextjs-using-redux"
                    target="_blank"
                >
                    {process.env.WEBSITE_NAME}
                </Link>{" "}
                &copy; {date}
            </p>
        </footer>
    );
}
