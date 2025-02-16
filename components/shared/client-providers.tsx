'use client'

import useCartSidebar from "@/hooks/use-cart-sidebar";
import React from "react";
import CartSidebar from "./cart-sidebar";
import { ThemeProvider } from "./theme-provider";

export default function ClientProviders({ children, }: { children: React.ReactNode }) {
    const isCartSidebarOpen = useCartSidebar()

    return (
        <ThemeProvider attribute='class' defaultTheme="system">
            {isCartSidebarOpen ? (
                <div className="flex min-h-screen">
                    <div className="flex-1 overflow-hidden">
                        {children}
                    </div>
                        <CartSidebar />
                </div>
            ) : (
                <div>{children}</div>
            )}
        </ThemeProvider>
    )

}