import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import React from "react";


export default async function RootLayout({
    children,
} : {
    children:React.ReactNode
}) {
        return (
            <div className="flec flex-col min-h-screen">
                <Header/>
                <main className="flex-1 flex flex-col">{children}</main>
                <Footer/>
            </div>
        )
}