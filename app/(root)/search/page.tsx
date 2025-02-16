
import CollapsibleOnMobile from "@/components/shared/collapsible-on-mobile"
import Pagination from "@/components/shared/pagination"
import ProductCard from "@/components/shared/product/product-card"
import ProductSortSelector from "@/components/shared/product/product-sort-selector"
import Rating from "@/components/shared/product/rating"
import { Button } from "@/components/ui/button"
import { getAllCategories, getAllProducts, getAllTags } from "@/lib/actions/product.actions"
import { IProduct } from "@/lib/db/models/product.model"
import { getFilterUrl, toSlug } from "@/lib/utils"
import Link from "next/link"


const sortOrders = [
    {value: 'price-low-to-high', name: 'Price: low to high'},
    {value: 'price-high-to-low', name: 'Price: high to low'},
    {value: 'newest-arrivals', name: 'Newest arrivals'},
    {value: 'avg-customer-review', name: 'Avg. customer review'},
    {value: 'best-selling', name: 'Best selling'},
]
const prices = [
    {
        name: '$1 to $20',
        value: '1-20',
    },
    {
        name: '$21 to $50',
        value: '21-50',
    },
    {
        name: '$51 to $100',
        value: '51-100',
    },
    {
        name: '$100 to $1000',
        value: '100-1000',
    },
]
export async function generateMetadat(props:{
    searchParams: Promise<{
        q:string
        category:string
        tag: string
        price: string
        rating: string
        sort: string
        page: string
    }>
}) {
    const searchParams = await props.searchParams
    const {
        q = 'all',
        category= 'all',
        tag = 'all',
        price = 'all',
        rating = 'all',
    } = searchParams

    if(
        (q !== 'all' && q !== '') || category !== 'all' || tag !== 'all' ||
        rating !== 'all' || price !== 'all'
    ){
        return {
            title: `Search ${q !== 'all' ? q : ''}
            ${category !== 'all' ? ` : Category ${category}` : ''}
            ${tag !== 'all' ?  ` : Tag ${tag}`:'' }
            ${price !== 'all' ? ` : Price ${price}` : ''}
            ${rating !== 'all' ? ` : Rating ${rating}` : ''}`,
        }
    }else{
        return {
            title: 'Search Products',
        }
    }
    
}

export default async function SearchPage(props:{
    searchParams: Promise<{
        q: string
        category:string
        tag: string
        price: string
        rating: string
        sort: string
        page: string
    }>
}) {
    const searchParams = await props.searchParams
    const {
        q = 'all',
        category= 'all',
        tag = 'all',
        price = 'all',
        rating = 'all',
        sort = 'best-selling',
        page = '1',
    } = searchParams
    
    const params = {q, category, tag, price, rating, sort, page}
    const categories = await getAllCategories()
    const tags = await getAllTags()
    const data = await getAllProducts({
        category,
        tag,
        query: q,
        price,
        rating,
        page:Number(page),
        sort,
    })
    return (
        <div>
            <div className=" mb-2 md:border-b flex-beteen flex-col md:flex-row">
                <div className=" flex items-center">
                    {data.totalProducts === 0 
                    ? 'No'
                :   `${data.from}-${data.to} of ${data.totalProducts}`}{' '}
                results
                {(q !== 'all' && q !== '')||
                (tag !== 'all' && tag !== '') ||
                (category !== 'all' && category !== '') ||
                rating !== 'all' || price !== 'all'
                ? `for` : null }
                {q !== 'all' && q !== '' && '"' + q + '"'}
                {category !== 'all' && category !== '' && ` Category:` + category}
                {tag !== 'all' && tag !== '' && `Tag:` + tag}
                {price !== 'all'  && ` Price:` + price}
                {rating !== 'all' && `Rating:` + rating + `& up`}
                &nbsp;
                {(q !== 'all' && q !== '') || category !== 'all' || tag !== 'all' ||
        rating !== 'all' || price !== 'all' ? (
            <Button variant={'link'} asChild >
                <Link href='/search'>Clear</Link>

            </Button>
        ) : null}
                </div>
                <div>
                    <ProductSortSelector sortOrders={sortOrders} 
                    sort={sort} params={params} />
                </div>
            </div>
            <div className=" bg-card grid md:grid-cols-5 md:gap-4">
                <CollapsibleOnMobile title="Filters">
                <div className=" space-y-4">
                    <div>
                        <div className="font-bold">
                            Department
                        </div>
                        <ul>
                            <li>
                                <Link href={getFilterUrl({category: 'all',params})}
                                className={`${('all' === category || '' === category) && 'text-primary'}`}>
                                All
                                </Link>
                            </li>
                            {categories.map((c:string) =>(
                                <li key={c}>
                                    <Link className={`${c === category && 'text-primary'}`}
                                    href={getFilterUrl({ category: c, params})}
                                    >
                                        {c}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold">Price</div>
                        <ul>
                            <li>
                                <Link href={getFilterUrl({price: 'all', params})}
                                className={`${'all' === price && 'text-primary'}`}>
                                All
                                </Link>
                            </li>
                            {prices.map((p) =>(
                                <li key={p.value}>
                                    <Link className={`${price === p.value && 'text-primary'}`}
                                    href={getFilterUrl({ price: p.value, params})}
                                    >
                                        {p.value}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold">Customer Review</div>
                        <ul>
                            <li>
                                <Link href={getFilterUrl({rating: 'all',params})}
                                className={`${'all' === rating && 'text-primary'}`}>
                                All
                                </Link>
                            </li>
                            <li>
                                <Link href={getFilterUrl({rating: '4',params})}
                                className={`${'4' === rating && 'text-primary'}`}>
                                <div className="flex">
                                    <Rating size={4} rating={4} />& Up
                                </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold">Tag</div>
                        <ul>
                            <li>
                                <Link  href={getFilterUrl({ tag: 'all', params})}
                                className={`${('all' === tag || '' === tag) && 'text-primary'}`}>
                                All
                                </Link>
                            </li>
                            {tags.map((t:string) =>(
                                <li key={t}>
                                    <Link href={getFilterUrl({tag: t, params})}
                                     className={`${toSlug(t) === tag && 'text-primary'}`}>
                                    {t}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                </CollapsibleOnMobile>
                <div className="md:col-span-4 space-y-4">
                    <div>
                        <div className=" font-bold text-xl">Results</div>
                        <div>Check each product page for other buying options</div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {data.products.length === 0 && <div>No Product found</div>}
                            {data.products.map((product: IProduct) =>(
                                <ProductCard key={product._id} product={product} />
                            ))}
                    </div>
                        {data!.totalPages! > 1 && (
                            <Pagination page={page} totalPages={data!.totalPages} />
                        )}
                </div>

            </div>
        </div>
    )
}