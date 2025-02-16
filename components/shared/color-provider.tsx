'use client'

import * as React from "react";
import {ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import useColorStore from "@/hooks/use-color-store";

export function ColorProvider ({
    children,
    ...props
} : React.ComponentProps<typeof NextThemesProvider>){
        const {theme} = useTheme()
        const {color,updateCssVariables} = useColorStore(theme)
        React.useEffect(()=>{
            console.log('theme, color')
            updateCssVariables()
        },[theme,color])
        return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}