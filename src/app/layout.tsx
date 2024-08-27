import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/pages/Header/Header";
import Footer from "@/pages/Footer/Footer";

const inter = Roboto({ subsets: ['latin'], weight: ["400"] });

export const metadata: Metadata = {
    title: "Kartoxa",
    description: "Calculator Kartoxa",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <Header />
                <div style={{ flex: 1 }}>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
