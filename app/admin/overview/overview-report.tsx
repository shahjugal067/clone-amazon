
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Skeleton } from "@/components/ui/skeleton"
import { getOrderSummary } from "@/lib/actions/order.actions"
import { calculatePastDate, formatDateTime, formatNumber } from "@/lib/utils"
import { useEffect, useState, useTransition } from "react"
import { DateRange } from "react-day-picker"
import { CalendarDateRangePicker } from "./date-range-picker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeDollarSign, Barcode, CreditCard, User } from "lucide-react"
import ProductPrice from "@/components/shared/product/product-price"
import Link from "next/link"
import SalesAreaChart from "./sales-area-chart"
import TableChart from "./table-chart"
import SalesCategoryPieChart from "./sales-category-pie-chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IOrderList } from "@/types"
 

export default function OverviewReport() {
    const [date,setDate] = useState<DateRange | undefined>({
        from:calculatePastDate(30),
        to: new Date(),
    })
    const [data, setData] = useState<{ [key: string]: any }>()

    const [isPending, startTransition] = useTransition()

    useEffect(() =>{
        if(date){
            startTransition(async () => {
                setData(await getOrderSummary(date))
            })
        }
       
    },[date])


    if(!data || isPending) 
        
        return (
    <div className=" space-y-4">
        <div>
            <h1 className="text-xl">Dashboard</h1>
        </div>
        {/* first row */}
        <div className="flex gap-4">
            {[...Array(4)].map((_,index) => (
                <Skeleton key={index} className="h-36 w-full"/>
            ))}
        </div>
        {/* second row */}
        <div>
            <Skeleton className="h-[30rem] w-full"/>
        </div>
        {/* third row */}
        <div className="flex gap-4">
            {[...Array(2)].map((_,index) => (
                <Skeleton key={index} className="h-60 w-full"/>
            ))}
        </div>
        {/* fourth row */}
        <div className="flex gap-4">
            {[...Array(2)].map((_,index) => (
                <Skeleton key={index} className="h-60 w-full"/>
            ))}
        </div>
    </div>
    )
    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-xl font-bold">Dashboard</h1>
                <CalendarDateRangePicker defaultDate={date} setDate={setDate} />
            </div>
            <div className="space-y-4">
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center pb-2 justify-between space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Total Revenue
                            </CardTitle>
                            <BadgeDollarSign />
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="text-2xl font-bold">
                                <ProductPrice price={data.totalSales} plain />
                            </div>
                            <div>
                                <Link className="text-xs" href='/admin/orders'>
                                View Revenue 
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                    <CardHeader className="flex flex-row items-center pb-2 justify-between space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Sales
                            </CardTitle>
                            <CreditCard />
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="text-2xl font-bold">
                                {formatNumber(data.ordersCount)}
                            </div>
                            <div>
                                <Link className="text-xs" href='/admin/orders'>
                                View orders 
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                    <CardHeader className="flex flex-row items-center pb-2 justify-between space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Customers
                            </CardTitle>
                           <User />
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="text-2xl font-bold">
                                {data.usersCount}
                            </div>
                            <div>
                                <Link className="text-xs" href='/admin/users'>
                                View Customers 
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                    <CardHeader className="flex flex-row items-center pb-2 justify-between space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Products
                            </CardTitle>
                           <Barcode/>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="text-2xl font-bold">
                                {data.productsCount}
                            </div>
                            <div>
                                <Link className="text-xs" href='/admin/users'>
                                 Products 
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Sales Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <SalesAreaChart data={data.salesChartData} />
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>How Much you are earning</CardTitle>
                            <CardDescription>Estimated . Last 6 months</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <TableChart data={data.monthlySales} labelType="month" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Product Performance</CardTitle>
                            <CardDescription>
                                {formatDateTime(date!.from!).dateOnly} to{''}
                                {formatDateTime(date!.to!).dateOnly}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <TableChart data={data.topSalesProducts} labelType="product" />
                        </CardContent>
                    </Card>

                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Best-Selling Categories</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <SalesCategoryPieChart data={data.topSalesCategories} />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Sales</CardTitle>
                            
                        </CardHeader>
                        <CardContent>
                           <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Buyer</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Total</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.latestOrders.map((order: IOrderList)=>(
                                        <TableRow key={order._id} >
                                            <TableCell>
                                                {order.user ? order.user.name : 'Deleted User'}
                                            </TableCell>

                                            <TableCell>
                                                {formatDateTime(order.createdAt).dateOnly}
                                            </TableCell>
                                            <TableCell>
                                                <ProductPrice price={order.totalPrice} plain />
                                            </TableCell>
                                            <TableCell>
                                                <Link href={`/admin/orders/${order._id}`}>
                                                <span className="px-2">Details</span>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                           </CardContent>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}