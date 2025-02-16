import { APP_NAME } from "@/lib/constants";
import Link from "next/link";


export default function CheckoutFooter(){
    return (
        <div className="border-t-2 space-y-2 my-4 py-4 border-gray-200">
        <p> Need help? Check our<Link href={'/page/help'}>Help Center</Link>or{' '}
        <Link href={'/page/contact-us'}>Contact Us</Link>{' '}
        </p>
        <p>
            For an item order from {APP_NAME}: When you click the &apos;Place Your
            Order&apos; button, the order will be placed and a confirmation
            email will be sent to the email address you provided.Your contract to purchase na item will not be complete until
            we sent you an email notifying you that the item has been shipped to you.
            By placing your order, you agree to receive emails from us.
            &apos;s <Link href={'/page/privacy-policy'}>privacy notice
            </Link> and <Link href={'/page/conditions-of-use'}>Conditions of use</Link>
        </p>
        <p>
            Withing 30 days of delivery you may return the item for a full refund. unopende its 
            original conditions.exceptions and restriction apply,{' '}
            <Link href={'/page/returns-policy'}>See{APP_NAME}&apos;s return policy</Link>
        </p>
        </div>
    )
}