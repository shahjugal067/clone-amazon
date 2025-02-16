import { IOrder } from "@/lib/db/models/order.model"

import { Html,Preview, Head, Tailwind, Body, Container, Heading, Section, Row, Column, Text, Img } from '@react-email/components' 
import { formatCurrency } from "@/lib/utils"
import { SERVER_URL } from "@/lib/constants"



type OrderInformationProps = {
    order:IOrder
}
PurchaseReceiptEmail.PreviewProps = {
    order: {
        _id: '123',
        isPaid: true,
        paidAt: new Date(),
        totalPrice: 100,
        itemsPrice: 100,
        taxPrice:0,
        shippingPrice:0,
        user:{
            name: 'John Doe',
            email: '8L0H3@example.com',
        },
        shippingAddress:{
            fullName: 'John Doe',
            street: '123 Main St',
            city: 'New York',
            province: 'NY',
            postalCode: '10001',
            country: 'USA',
            phone: '123-456-7890',
        },
        items:[
            {
            clientId:'123',
            product: '123',
            size: 'sizes',
            color: 'color',
            quantity:1,
            countInStock:10,
            name:'123',
            slug: 'product-1',
            category: '123',
            price: 100,
            image: '123',
        },
    ],
    paymentMethod: 'PayPal',
    expectedDeliveryDate: new Date(),
    isDelivered:true,
    } as IOrder,
} satisfies OrderInformationProps
const dateFormatter = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
})
export default async function PurchaseReceiptEmail({
    order,
} : OrderInformationProps) {
    return (
        <Html>
            <Preview> Purchase order Receipt</Preview>
            <Tailwind>
                <Head/>
                <Body className="font-sans bg-white">
                    <Container className="max-w-xl">
                        <Heading>Purchase Receipt</Heading>
                        <Section>
                            <Row>
                                <Column>
                                <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
                                    Order ID
                                </Text>
                                <Text className="mt-0 mr-4">{order._id.toString()}</Text>
                                </Column>
                                <Column>
                                <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
                                    Purchase On
                                </Text>
                                <Text className="mt-0 mr-4">
                                    {dateFormatter.format(order.createdAt)}
                                    </Text>
                                
                                </Column>
                                <Column>
                                <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
                                    Price Paid
                                </Text>
                                <Text className="mt-0 mr-4">
                                    {formatCurrency(order.totalPrice)}
                                    </Text>
                                </Column>
                            </Row>
                        </Section>
                        <Section className="border border-solid my-4 border-gray-50 rounded-lg p-4 md:p-6">
                             {order.items.map((item)=>(
                                <Row key={item.product} className="mb-8">
                                    <Column>
                                    <Img width='80' alt={item.name} className="rounded"
                                    src={item.image.startsWith('/') ? `${SERVER_URL}${item.image}`
                                : item.image} />
                                    </Column>
                                    <Column className="align-top">
                                    <Text className="mx-2 my-0" >
                                        {item.name}x{item.quantity}
                                    </Text>
                                    </Column>
                                    <Column align="right" className="align-top">
                                    <Text className=" m-0">
                                        {formatCurrency(item.price)}
                                    </Text>
                                    </Column>
                                    </Row>
                             ))}
                             {[
                                {name:'Items',price: order.itemsPrice},
                                {name:'Tax',price: order.taxPrice},
                                {name:'Shipping',price: order.shippingPrice},
                                {name:'Total',price: order.totalPrice},
                             ].map(({name,price})=>(
                                 <Row key={name} className="py-1">
                                    <Column align="right">{name}:</Column>
                                    <Column align="right" width={70} className="align-top">
                                    <Text >{formatCurrency(price)}</Text>
                                    </Column>
                                    </Row>
                             ))}
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}