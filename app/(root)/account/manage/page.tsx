import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"
import {SessionProvider } from 'next-auth/react'
import Link from "next/link"

const PAGE_TITLE = 'Login & Security'

export const metadat: Metadata = {
    title:PAGE_TITLE,
}
export default async function ProfilePage() {
    const session = await auth()
    return (
        <div className="mb-24">
            <SessionProvider session={session}>
                <div className="flex gap-2">
                    <Link href='/account'>Your Account</Link>
                    <span>,</span>
                    <span>{PAGE_TITLE}</span>
                </div>
                <h1 className="h1-bold py-4">{PAGE_TITLE}</h1>
                <Card className="max-w-2xl">
                    <CardContent className="p-4 flex justify-between flex-wrap">
                        <div>
                            <h3 className="font-bold">Name</h3>
                            <p>{session?.user.name}</p>
                        </div>
                        <div>
                            <Link href='/account/manage/name'>
                            <Button className=" rounded-full w-32 bg-blue-400">
                                Edit
                            </Button>
                            </Link>
                        </div>
                    </CardContent>
                    <Separator />
                    <CardContent className=" p-4 flex justify-between flex-wrap">
                        <div>
                            <h3 className="font-bold">Email</h3>
                            <p>{session?.user.email}</p>
                        </div>
                            <div>
                                <Link href='#'>
                                <Button disabled className=" rounded-full w-32 bg-blue-400" variant='outline' >
                                    Edit 
                                </Button>
                                </Link>
                            </div>
                    </CardContent>
                    <Separator />
                    <CardContent className=" p-4 flex justify-between flex-wrap">
                        <div>
                            <h3 className="font-bold">Password</h3>
                            <p>**********</p>
                            <p>later must be implemented</p>
                        </div>
                            <div>
                                <Link href='#'>
                                <Button disabled className=" rounded-full w-32 bg-blue-400" variant='outline' >
                                    Edit 
                                </Button>
                                </Link>
                            </div>
                    </CardContent>

                </Card>
            </SessionProvider>

        </div>
    )
}