import { Data, IProductInput, IUserInput } from "@/types";
import { toSlug } from "./utils";
import bcrypt from 'bcryptjs'

const users: IUserInput[] =[
  {
    name: 'John',
    email:'admin@example.com',
    password: bcrypt.hashSync('123456',5),
    role: 'Admin',
    address:{
      fullName: 'John Deo',
      street: '123 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false
  },
  {
    name: 'Jane',
    email:'jane@example.com',
    password: bcrypt.hashSync('123456',5),
    role: 'User',
    address:{
      fullName: 'jane  Nane',
      street: '123 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false
  },
  {
    name: 'Bishal',
    email:'bishal@example.com',
    password: bcrypt.hashSync('123456',5),
    role: 'User',
    address:{
      fullName: 'Bishal  sah',
      street: '123 Main Bk',
      city: 'New York',
      province: 'NY',
      postalCode: '10034',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false
  },
  {
    name: 'Prince',
    email:'prince@example.com',
    password: bcrypt.hashSync('123456',5),
    role: 'User',
    address:{
      fullName: 'Prince  Sah',
      street: '155 Main Sk',
      city: 'New York',
      province: 'NY',
      postalCode: '10033',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false
  },
  {
    name: 'Rohit',
    email:'rohit@example.com',
    password: bcrypt.hashSync('123456',5),
    role: 'User',
    address:{
      fullName: 'Rohit  Sah',
      street: '111 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10005',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false
  },
  {
    name: 'Rahul',
    email:'rahul@example.com',
    password: bcrypt.hashSync('123456',5),
    role: 'User',
    address:{
      fullName: 'Rahul  Sah',
      street: '143 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10034',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false
  },
  {
    name: 'Raj',
    email:'raj@example.com',
    password: bcrypt.hashSync('123456',5),
    role: 'User',
    address:{
      fullName: 'Raj  sah',
      street: '133 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1004',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false
  },

]

const products:IProductInput[] = [
  {
  name: "Nike mens slim-fit long sleeve t-shirt",
  slug: toSlug("Nike mens slim-fit long sleeve t-shirt"),
  category: "T-Shirts",
  images: ["/images/asa.jpg", "/images/asaa.jpg"],
  
  brand: "Max",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["New arrival","todays-deal"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Addidas mens  shoes",
  slug: toSlug("Nike mens shoes"),
  category: "Shoes",
  images: ["/images/asaas.jpg", "/images/asaw.jpg"],
  
  brand: "Addidas",
  price: 32,
  isPublished: true,
  listPrice: 2,
  
  tags: ["best-seller","todays-deal"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["yellow", "Red", "Black"],
  avgRating: 4.5,
  numReviews: 3,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 5,
  countInStock:15,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Ladies Dress",
  slug: toSlug("Ladies dress for slim-fit long sleeve t-shirt"),
  category: "Women",
  images: ["/images/ladies1.jpg", "/images/ladies2.jpg"],
  
  brand: "Lewis",
  price: 15,
  isPublished: true,
  listPrice: 0,
  
  tags: ["featured","todays-deal"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["blue", "grey", "Black"],
  avgRating: 4.8,
  numReviews: 10,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 11,
  countInStock:9,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Kichen Utilities",
  slug: toSlug("kitchen utilities of best brand"),
  category: "Kitchen",
  images: ["/images/kitchen1.jpg", "/images/kitchen2.jpg"],
  
  brand: "Yasuda",
  price: 44,
  isPublished: true,
  listPrice: 0,
  
  tags: ["new-arrival","featured"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.9,
  numReviews: 12,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 5,
  countInStock:15,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Perfume",
  slug: toSlug("Formume are for better perfumes"),
  category: "Perfumes",
  images: ["/images/perfume1.jpg", "/images/perfume2.jpg"],
  
  brand: "Cobra",
  price: 10,
  isPublished: true,
  listPrice: 1,
  
  tags: ["best-seller"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.8,
  numReviews: 12,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 8,
  countInStock:12,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Perfume",
  slug: toSlug("Formume for mainly women favaorite"),
  category: "Perfumes",
  images: ["/images/perfume3.jpg", "/images/perfume4.jpg"],
  
  brand: "Para",
  price: 12,
  isPublished: true,
  listPrice: 2,
  
  tags: ["best-seller","new-arrival"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Shoes for men",
  slug: toSlug("zara brand of shoes is very comfortable"),
  category: "Shoes",
  images: ["/images/zara1.jpg", "/images/zara2.jpg"],
  
  brand: "Zara",
  price: 18,
  isPublished: true,
  listPrice: 0,
  
  tags: ["new-arrival","featured"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Dickies  dress for men and women both for comfort",
  slug: toSlug("Ladies dress"),
  category: "Jeans",
  images: ["/images/ladies3.jpg", "/images/ladies4.jpg"],
  
  brand: "Dickies",
  price: 22,
  isPublished: true,
  listPrice: 0,
  
  tags: ["neew-arrival"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Shikhar shoes ",
  slug: toSlug("Shikhara shoes for men and women"),
  category: "Shoes",
  images: ["/images/shikhar1.jpg", "/images/shikhar2.jpg"],
  
  brand: "Shikhar",
  price: 25,
  isPublished: true,
  listPrice: 7,
  
  tags: ["new-arrival","featured"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Kajal beauti product for eyes",
  slug: toSlug("It is the best product for eyeliner"),
  category: "Beauti",
  images: ["/images/beauti1.jpg", "/images/beauti2.jpg"],
  
  brand: "Lakeme",
  price: 26,
  isPublished: true,
  listPrice: 10,
  
  tags: ["new-arrival"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Apple laptop ",
  slug: toSlug("The world best laptop for education and business"),
  category: "Laptop",
  images: ["/images/laptop1.jpg", "/images/laptop2.jpg"],
  
  brand: "Apple",
  price: 33,
  isPublished: true,
  listPrice: 3,
  
  tags: ["new-arrival"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Beutiproduct for women",
  slug: toSlug("The world best product for women Ganier"),
  category: "Beauti",
  images: ["/images/beauti3.jpg", "/images/beauti4.jpg"],
  
  brand: "Garnier",
  price: 22,
  isPublished: true,
  listPrice: 0,
  
  tags: ["new-arrival","best-seller"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Human Being t shirt",
  slug: toSlug("Human being tshirt is perfect to show up"),
  category: "T-Shirts",
  images: ["/images/tshirt1.jpg", "/images/tshirt2.jpg"],
  
  brand: "Human being",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["New arrival"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Apple Laptop",
  slug: toSlug("The world no.1 brand company ipad"),
  category: "Laptop",
  images: ["/images/banner1.jpg", "/images/banner2.jpg"],
  
  brand: "Apple",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["new-arrival"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Levies",
  slug: toSlug("Levies tshirt is made with fabric materials"),
  category: "Shoes",
  images: ["/images/levis1.jpg", "/images/levis2.jpg"],
  
  brand: "Levis",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["new-arrival","featured"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Lenevo Laptop",
  slug: toSlug("The trusted laptop of most microsoft user"),
  category: "Laptop",
  images: ["/images/tshirt1.jpg", "/images/tshirt2.jpg"],
  
  brand: "Leneo",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["new-arrival"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "WoodLand belt",
  slug: toSlug("The belt for men for better use of WoodLand"),
  category: "Belt",
  images: ["/images/tshirt1.jpg", "/images/tshirt2.jpg"],
  
  brand: "WoodLand",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["new-arrival"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Sun glass for Style",
  slug: toSlug("For the style added to you by sunglasses"),
  category: "Sunglass",
  images: ["/images/addidas3.jpg", "/images/addidas4.jpg"],
  
  brand: "Ribon",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["todays-deal"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Sunglass for women",
  slug: toSlug("The sunglass of crezal company "),
  category: "Sunglass",
  images: ["/images/tshirt1.jpg", "/images/tshirt2.jpg"],
  
  brand: "Crenzel",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["new-arrival","best-seller"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Shock for men and Women",
  slug: toSlug("Socks are made for both women and mens"),
  category: "Shocks",
  images: ["/images/tshirt1.jpg", "/images/tshirt2.jpg"],
  
  brand: "Gorila",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["new-arrival"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Shampoo",
  slug: toSlug("The Clinicplus Shampoo is best for antidandruff hair fall"),
  category: "Shampoo",
  images: ["/images/tshirt1.jpg", "/images/tshirt2.jpg"],
  
  brand: "Clinic Plus",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["new-arrival"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Vaseline body lotion",
  slug: toSlug("Vaseline bodylotion is the one of the lotion use usual day for moisture"),
  category: "BodyLotion",
  images: ["/images/tshirt1.jpg", "/images/tshirt2.jpg"],
  
  brand: "Vaseline",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["New arrival"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Under Wear",
  slug: toSlug("Under garment for both men and women"),
  category: "Under Garment",
  images: ["/images/tshirt1.jpg", "/images/tshirt2.jpg"],
  
  brand: "Shera Comfort",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["new-arrival","best-seller"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},
{
  name: "Vest for mens",
  slug: toSlug("The vest is made with pure cotton"),
  category: "Vest",
  images: ["/images/tshirt1.jpg", "/images/tshirt2.jpg"],
  
  brand: "Lux Cozy",
  price: 21,
  isPublished: true,
  listPrice: 0,
  
  tags: ["new-arrival","featured"],
  sizes: ["S", "M", "L","xl","2xl"],
  colors: ["White", "Red", "Black"],
  avgRating: 4.7,
  numReviews: 8,
  ratingDistribution: [
    {
      rating: 1,
      count: 0,
    },
    {
      rating: 2,
      count: 0,
    },
    {
      rating: 3,
      count: 0,
    },
    {
      rating: 4,
      count: 2,
    },
    {
      rating: 5,
      count: 3,},
  ],
  numSales: 9,
  countInStock:11,
  description: 'made with chemicals safer for human health and the environment',
  reviews: []

},

]
const reviews = [
  {
    rating:1,
    title: "bad quality",
    comment: "not to be usefull material just waste of money",
  },
  {
    rating:4,
    title: "Excellent Quality",
    comment: "Its an amazing product with this price ",
  },
  {
    rating:5,
    title: "Satifying",
    comment: "Not so bad not too cool it a just average",
  },
  {
    rating:4,
    title: "Better than expected",
    comment: "many time a buy but first time i get better than i expected",
  },
  {
    rating:5,
    title: "bad quality",
    comment: "use of poor material and waste of money",
  },
  {
    rating:3,
    title: "Disappointed",
    comment: "totaly disappointent from buying this i never suggest to buy any one this product",
  },
  {
    rating:4,
    title: "good quality",
    comment: "its just above the avarage quality",
  },
  {
    rating:2,
    title: "Excellent Quality",
    comment: "just satisfying quality",
  },
  {
    rating:3,
    title: "Avarage Quality",
    comment: "its just above the avarage quality",
  },
  {
    rating:1,
    title: "bad quality",
    comment: "bad quality",
  },
  {
    rating:3,
    title: "Poor quality",
    comment: "Very disappointed the item broke after just a few uses. not worth the money",
  },
  {
    rating:2,
    title: "Disappointed",
    comment: "Not as expected. the material feels cheap and it didnot fit well",
  },
  {
    rating:2,
    title: "Needs Improvement",
    comment:"it looks nice but doesnt perform as expected. wouldnt recommended without upgraded ",
  },
  {
    rating:1,
    title: "good quality",
    comment: "its is very good quality ",
  },
]

const data: Data = {
  users,
  reviews,
  products,
  headerMenus: [ 
    {
      name: "Today's Deal",
      href: "/search?tag=todays-deal",
    },
    {
      name: "New Arrivals",
      href: "/search?tag=new-arrival",
    },
    {
      name: "Featured Products",
      href: "/search?tag=featured",
    },
    {
      name: "Best Seller",
      href: "/search?tag=best-seller",
    },
    {
      name: "Browsing History",
      href: "/#browsing-history",
    },
    {
        name: "Customer Service",
        href: "/page/customer-service",
      },
      {
        name: "About Us",
        href: "/page/about-us",
      },
      {
        name: "Help",
        href: "/page/help",
      },
  ],
  carousels:[
    {
      title:'Most popular Shoes For Sale',
      buttonCaption:'Shop Now',
      image:'/images/banner1.jpg',
      url:'/search?category=shoes',
      isPublished:true,
    },
    {
      title:'Best Seller in T-Shirts ',
      buttonCaption:'Shop Now',
      image:'/images/banner2.jpg',
      url:'/search?category=T-Shirts',
      isPublished:true,
    },
    {
      title:'Best Deal on Wrist Watches',
      buttonCaption:'Shop Now',
      image:'/images/banner3.jpg',
      url:'/search?category=Wrist Watches',
      isPublished:true,
    },
  ],
  
}

export default data