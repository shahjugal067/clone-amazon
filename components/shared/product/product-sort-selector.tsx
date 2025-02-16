'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getFilterUrl } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ProductSortSelector({
    sortOrders,
    sort,
    params,
} : {
    sortOrders: { value: string; name: string }[]
    sort: string
    params:{
        q?: string
        category?: string
        sort?: string
        price?: string
        rating?: string
        page?: string
    }
}) {
    const router = useRouter()
    return (
        <Select onValueChange={(v)=>{
            router.push(getFilterUrl({params,sort:v}))
        }} value={sort}>
            <SelectTrigger>
                <SelectValue placeholder="Sort By" >
                    Sort By: {sortOrders.find((s) => s.value === sort)!.name}
                </SelectValue>
            </SelectTrigger>
            <SelectContent>
                {sortOrders.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                        {s.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )

}

