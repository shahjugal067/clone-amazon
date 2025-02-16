import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";



const MongoId = z.string().regex(/^[0-9a-fA-F]{24}$/,{message:'MongoId is invalid'})

const Price =(field: string) =>
    z.coerce.number().refine((value) => /^\d*\.?\d{0,2}$/.test(formatNumberWithDecimal(value)),
    `${field} must have exaclty two decimal place`
    );

    export const ReviewInputSchema = z.object({
        product: MongoId,
        user: MongoId,
        isVerifiedPurchase: z.boolean(),
        title: z.string().min(1,'Title is required'),
        comment: z.string().min(1,'Comment is required'),
        rating: z.coerce.number().int()
        .min(1,'Rating must be at least 1')
        .max(5,'Rating must be at most 5'),
    })


    export const ProductInputSchema = z.object({
        name: z.string().min(3,'Name must be at least 3 character'),
        slug: z.string().min(3,'Slug must be at least 3 character'),
        category: z.string().min(1,'Category must be required'),
        images: z.array(z.string()).min(1,'Images must be at least 1 images'),
        description: z.string().min(1,'Description must required'),
        brand: z.string().min(1,'Brand must required'),
        price: Price('Price'),
        isPublished: z.boolean(),
        listPrice: Price('List Price'),
        countInStock: z.coerce.number().int().nonnegative('count in stock must be a non negative numner'),
        tags: z.array(z.string()).default([]),
        sizes: z.array(z.string()).default([]),
        colors: z.array(z.string()).default([]),
        avgRating: z.coerce.number().min(0,'Average rating must be at least 0')
        .max(5,'Average rating must be at most 5'),
        numReviews: z.coerce.number()
        .int().nonnegative('Number of reviews must be a non negative numner'),
        ratingDistribution: z.array(z.object({rating:z.number(), count:z.number() }))
        .max(5),
        reviews: z.array(ReviewInputSchema).default([]),
        numSales: z.coerce.number().int().nonnegative('Number of sales must be a non negative numner'),
    })

    // Order Item

    export const OrderItemScheme = z.object({
        clientId: z.string().min(1,'clientId is required'),
        product: z.string().min(1,'Product is required'),
        name: z.string().min(1,'Name is required'),
        slug: z.string().min(1,'Slug is required'),
        category: z.string().min(1,'Category is required'),
        quantity: z.number().int()
        .nonnegative('Quantity must be a non negative number'),
        countInStock: z.number().int().nonnegative('Quantity must be a non negative number'),
        image:z.string().min(1,'Image is required'),
        price:Price('Price'),
        size: z.string().optional(),
        color: z.string().optional(),
    })
    export const ShippingAddressSchema = z.object({
        fullName: z.string().min(1,'Full name is required'),
        street: z.string().min(1,'Street name is required'),
        city: z.string().min(1,'City is required'),
        province: z.string().min(1,'Province is required'),
        postalCode: z.string().min(1,'postalcode  is required'),
        country: z.string().min(1,'Country name is required'),
        phone: z.string().min(1,'Phone Number is required'),
    })

    // order
    export const OrderInputSchema = z.object({
        user: z.union([
            MongoId,
            z.object({
                name: z.string(),
                email: z.string().email(),
            }),
        ]),
        items: z.array(OrderItemScheme).min(1,'Order must contain at least one item'),
        shippingAddress: ShippingAddressSchema,
        paymentMethod: z.string().min(1,'Payment method is required'),
        paymentResult: z.object({
            id: z.string(),
            status: z.string(),
            pricePaid: z.string(),
            email_address: z.string(),
        }).optional(),
        itemsPrice:Price('Items Price'),
        taxPrice:Price('Tax Price'),
        shippingPrice:Price('Shipping Price'),
        totalPrice:Price('Total Price'),
        expectedDeliveryDate: z.date()
        .refine((Value) => Value > new Date(), 'Expected Delivery Date must be in the future'),
        isDelivered: z.boolean().default(false),
        deliveredAt: z.date().optional(),
        isPaid: z.boolean().default(false),
        paidAt: z.date().optional(),
        // isCancelled: z.boolean().default(false),
        // cancelledAt: z.date().optional(),
    })
    // cart 

   
    export const CartSchema = z.object({
        items: z.array(OrderItemScheme).min(1,'Order must contain at least one item'),
        itemsPrice: z.number(),
        taxPrice: z.optional(z.number()),
        shippingPrice: z.optional(z.number()),
        totalPrice: z.number(),
        paymentMethod: z.optional(z.string()),
        shippingAddress: z.optional(ShippingAddressSchema),
        deliveryDateIndex: z.optional(z.number()),
        expectedDeliveryDate: z.optional(z.date()),
    })

    //USER 

    const UserName = z.string().min(2,{message: 'Username must be at least 3 character'})
    .max(50,{message:'Username must be at most 30 character'})

    const Email = z.string().min(1,'Email is required').email('Email is invalid')
    const Password = z.string().min(3,'Password must be at least 3 character')
    const UserRole = z.string().min(1,'role is required')

    export const UserInputSchema = z.object({
        name: UserName,
        email: Email,
        image: z.string().optional(),
        emailVerified: z.boolean(),
        role: UserRole,
        password: Password,
        paymentMethod: z.string().min(1,'Payment method is required'),
        address: z.object({
            fullName: z.string().min(1,'Full name is required'),
            street: z.string().min(1,'Street name is required'),
            city: z.string().min(1,'City is required'),
            province: z.string().min(1,'Province is required'),
            postalCode: z.string().min(1,'postalcode  is required'),
            country: z.string().min(1,'Country name is required'),
            phone: z.string().min(1,'Phone Number is required'),
        }),
    })

    export const UserSignInSchema = z.object({
        email: Email,
        password: Password,
    })

    export const UserSignUpSchema = UserSignInSchema.extend({
        name:UserName,
        confirmPassword:Password,
    }).refine((data)=> data.password === data.confirmPassword,{
        message: 'Passwords dont match',
        path:['confirmPassword'],
    })
    export const UserNameSchema = z.object({
        name: UserName,
    })