import BrowsingHistoryList from "@/components/shared/browsing-history-list"
import { Card, CardContent } from "@/components/ui/card"
import { PackageCheckIcon, User } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"


const PAGE_TITLE = 'YourAccount'

export const metadata: Metadata = {
    title: PAGE_TITLE,
}
export default function AccountPage() {
    return (
        <div>
            <h1 className="h1-bold py-4">{PAGE_TITLE}</h1>
            <div className="grid md:grid-cols-3 gap-4 items-stretch">
                <Card>
                    <Link href='/account/orders'>
                    <CardContent className="flex items-start gap-4 p-6">
                        <div>
                            <PackageCheckIcon className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Orders</h2>
                            <p className="text-muted-foreground">
                                Track return cancel and order download invoice or buy again
                            </p>
                        </div>
                    </CardContent>
                    </Link>
                </Card>
                <Card>
                <Link href='/account/manage'>
                    <CardContent className="flex items-start gap-4 p-6">
                        <div>
                            <User className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Login & Security</h2>
                            <p className="text-muted-foreground">
                                Manage password, email and phone number
                            </p>
                        </div>
                    </CardContent>
                    </Link>
                </Card>
                <Card>
                <Link href='/account/addresses'>
                    <CardContent className="flex items-start gap-4 p-6">
                        <div>
                            <PackageCheckIcon className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Addresses</h2>
                            <p className="text-muted-foreground">
                                Edit remove or set default address
                            </p>
                        </div>
                    </CardContent>
                </Link>
             </Card>
            </div>
            <BrowsingHistoryList className="mt-16" />
        </div>
    )
}