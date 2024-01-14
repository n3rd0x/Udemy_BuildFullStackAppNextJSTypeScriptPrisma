import { Inter } from "next/font/google";
import "./globals.css";
import Head from "@/head";
import GlobalProvider from "@/globalProvider";
import Footer from "@/component/footer";
import Header from "@/component/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head />
            <body className={inter.className}>
                <GlobalProvider>
                    <Header />
                    {children}
                    <Footer />
                </GlobalProvider>
            </body>
        </html>
    );
}
