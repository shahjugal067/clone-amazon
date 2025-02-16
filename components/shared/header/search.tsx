

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger,
     SelectValue } from "@/components/ui/select";
import { getAllCategories } from "@/lib/actions/product.actions";
import { APP_NAME } from "@/lib/constants";
import { SearchIcon } from "lucide-react";


//const categories =['men','women','kids','accessories']
export default async function Search(){

    const categories = await getAllCategories()

    return(
        <form action='/search' method="GET" className=" flex items-stretch h-10">
            <Select name="category">
                <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r
                  rounded-r-none ">
                        <SelectValue placeholder='All'/>
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="all">All</SelectItem>
                    {categories.map((category)=>(
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                    ))}

                </SelectContent>
            </Select>
            <Input className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-base h-full text-black"
            placeholder={`Search Site ${APP_NAME}`} name="q" type="search" />
            <button type="submit"
            className="bg-yellow-400 text-primary-foreground text-black rounded-s-none text-base
             h-full rounded-e-md">
                <SearchIcon className="w-5 h-5 hover:text-green-600"/>
             </button>

        </form>
    )
}