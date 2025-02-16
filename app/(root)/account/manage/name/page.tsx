import { auth } from "@/auth"
import { Card, CardContent } from "@/components/ui/card"
import { APP_NAME } from "@/lib/constants"
import { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import Link from "next/link"
import { ProfileForm } from "./profile-form"


const PAGE_TITLE = 'Change Your Name'
export const metadata: Metadata = {
    title: PAGE_TITLE,
}
export default async function ProfilePage() {
    const session = await auth()
    return (
        <div className="mb-24">
            <SessionProvider session={session} >
                <div className="flex gap-2">
                    <Link href='/account'>Your Account</Link>
                    <span>,</span>
                    <span>{PAGE_TITLE}</span>
                </div>
                <h1 className="h1-bold py-4">{PAGE_TITLE}</h1>
                <Card className="max-w-2xl">
                    <CardContent className="p-4 flex justify-between flex-wrap">
                        <p className="text-sm py-2">
                            If you want to change the name associated with your {APP_NAME}
                            &apos;s account, you can do so here.Be sure to click the 
                            Save Change button when you are done
                        </p>
                        <ProfileForm />
                    </CardContent>
                </Card> 
            </SessionProvider>
        </div>
    )
}