import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { SignOut } from "@/lib/actions/user.actions"
import { ChevronRight, MenuIcon, UserCircle, X } from "lucide-react"
import Link from "next/link"


export default async function Sidebar({
    categories,
    
} : {
    categories: string[]
}) {
    const session = await auth()

    return (
        <Drawer direction="left">
            <DrawerTrigger className="header-button flex items-center !p-2">
                <MenuIcon className="w-5 h-5 mr-1" />
               
                All
            </DrawerTrigger>
            <DrawerContent className="w-[350px] mt-0 top-0">
            <div className=" flex flex-col h-full">
                 {/* user sign in section */}
                <div className="dark bg-gray-800 text-foreground flex items-center justify-between">
                    <DrawerHeader>
                        <DrawerTitle>
                            <UserCircle className="w-5 h-5 mr-2" />
                            {session ? (
                                <DrawerClose asChild>
                                    <Link href={'/account'}>
                                    <span className="text-lg font-semibold">Hello, {session.user.name}</span>
                                    </Link>
                                </DrawerClose>
                            ) : (
                                <DrawerClose asChild>
                                    <Link href={'/sign-in'}>
                                    <span className="text-lg font-semibold">Hello, Sign in</span>
                                    </Link>
                                </DrawerClose>
                            )}
                        </DrawerTitle>
                        <DrawerDescription></DrawerDescription>
                    </DrawerHeader>
                    <DrawerClose asChild>
                        <Button variant='ghost' size={'icon'} className="mr-2">
                            <X className="w-5 h-5 hover:bg-red-800" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </DrawerClose>
                </div>
                {/* shop by categories */}
                <div className="flex-1 overflow-y-auto">
                    <div className="p-4 border-b">
                        <h2 className="font-semibold text-lg">Shop By Category</h2>
                    </div>
                    <nav className="flex flex-col">
                            {categories.map((category) => (
                                <DrawerClose asChild key={category}>
                                    <Link href={`/search?category=${category}`}
                                    className={`flex items-center justify-between item-button`}>
                                        <span>{category}</span>
                                            <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </DrawerClose>
                            ))}
                    </nav>
            </div>
            {/* setting and help */}
            <div className="border-t flex flex-col">
                <div className="p-4">
                    <h2 className="font-semibold text-lg">Help & Setting</h2>
                </div>
                <DrawerClose asChild>
                    <Link href='/account' className="item-button">
                    Your Account
                    </Link>
                </DrawerClose>{' '}
                <DrawerClose asChild>
                    <Link href='/page/customer-service' className="item-button">
                    Customer Service
                    </Link>
                </DrawerClose>
                {session ? (
                    <form action={SignOut} className=" w-full">
                        <Button type="submit" variant='ghost' 
                        className="item-button w-full items-start text-base">
                            Sign Out
                        </Button>
                    </form>
                ) : (
                    <Link href='/sign-in' className="item-button">
                        Sign In
                    </Link>
                )}
                </div>
            </div>
            </DrawerContent>
        </Drawer>
    )
    
}