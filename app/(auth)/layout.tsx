import { APP_COPYRIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default async function AuthLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <div className=" flex flex-col items-center max-h-screen highlight-link">
            <header className="mt-8">
                <Link href='/'>
                <Image src={'/2.png'} width={64} height={64} alt="logo" priority
                style={{ maxWidth: '100%',
                    height:'auto'
                }} />
                </Link>
            </header>
            <main className="mx-auto max-w-sm min-w-80 p-4">
                {children}
            </main>
            <footer className="flex-1 mt-8 bg-gray-800 w-full flex flex-col p-8 text-sm
             gap-4 items-center">
                <div className="flex justify-center space-x-4">
                    <Link href='/page/conditions-of-use'>Conditions of Use</Link>
                    <Link href='/page/privacy-policy'>Privacy Notice</Link>
                    <Link href='/page/help'>Help</Link>

                </div>
                    <div>
                        <p className="text-gray-500">{APP_COPYRIGHT}</p>
                    </div>
            </footer>

        </div>
    )
}