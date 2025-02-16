'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const links = [
    {
        title:"Overview",
        href: '/admin/overview',
    },
    {
        title:"Products",
        href: '/admin/products',
    },
    {
        title:"Orders",
        href: '/admin/orders',
    },
    {
        title:"Users",
        href: '/admin/users',
    },
    {
        title:"Pages",
        href: '/admin/overview',
    },
    {
        title:"Overview",
        href: '/admin/web-pages',
    },
    {
        title:"Carousel",
        href: '/admin/carousel',
    },
    {
        title:"Setting",
        href: '/admin/setting',
    },
]
export function AdminNav ({
    className,
    ...props
} : React.HTMLAttributes<HTMLElement>){
    const pathname = usePathname()
    return (
        <nav className={cn('flex items-center flex-wrap overflow-hidden gap-2 md:gap-4',className)}
        {...props}>
            {links.map((item)=>(
                <Link key={item.href} href={item.href}
                className={cn('',pathname.includes(item.href) ? '' : 'text-muted-foreground')}>
                    {item.title}
                </Link>
            ))}

        </nav>
    )
}