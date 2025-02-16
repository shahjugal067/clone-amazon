import useCartStore from "@/hooks/use-cart-store";
import ProductPrice from "./product/product-price";
import { FREE_SHIPPING_MIN_PRICE } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectValue } from "../ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { TrashIcon } from "lucide-react";



export default function CartSidebar() {
    const {
        cart: {items, itemsPrice},
        updateItem,
        removeItem,
    }= useCartStore()
    return (
        <div className="w-36 overflow-y-auto ">
            <div className={`fixed border-l h-full`}>
                <div className="p-2 h-full flex flex-col gap-2 justify-center items-center">
                    <div className="text-center space-y-2">
                        <div>Subtotal</div>
                        <div className="font-bold">
                            <ProductPrice price={itemsPrice} plain />
                        </div>
                        {itemsPrice > FREE_SHIPPING_MIN_PRICE && (
                            <div className="text-center text-xl"> 
                                Your order qualifies for FREE shipping
                            </div>
                        )}

                        <Link  href={'/cart'}
                        className={cn(buttonVariants({variant: 'outline'}),'rounded-full hover:no-underline w-full bg-yellow-400')}>
                            Go to Cart
                        </Link>
                        <Separator className="mt-3" />
                    </div>
                    <ScrollArea className="flex-1 w-full">
                        {items.map((item)=>(
                            <div key={item.clientId}>
                                <div className="my-3">
                                    <Link href={`/product/${item.slug}`}>
                                    <div className="relative h-24">
                                        <Image src={item.image} alt={item.name} fill sizes="120vh" className="object-contain" />

                                    </div>
                                    </Link>
                                    <div className="text-sm text-center font-bold">
                                        <ProductPrice price={item.price} plain />
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <Select value={item.quantity.toString()} 
                                        onValueChange={(value) =>{updateItem(item, Number(value))                                         
                                         }}  >
                                            <SelectTrigger className="text-xs w-12 ml-1 h-auto py-0">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Array.from({ length: item.countInStock}).map(
                                                    (_,i)=> (
                                                        <SelectItem value={(i + 1).toString()} key={i + 1}>
                                                            {i + 1}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectContent>

                                        </Select>
                                        <Button variant={'outline'} size={'sm'} 
                                        onClick={()=>{removeItem(item)}}>
                                            <TrashIcon className="h-4 w-4 text-red-600"  />
                                        </Button>
                                    </div>
                                </div>
                                <Separator/>
                            </div>
                        ))}
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}