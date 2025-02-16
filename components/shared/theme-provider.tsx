'use client'

import React from "react";
import { ColorProvider } from "./color-provider";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
    children,
    ...props
} : React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider {...props} >
            <ColorProvider>{children}</ColorProvider>
        </NextThemesProvider>
    )
}