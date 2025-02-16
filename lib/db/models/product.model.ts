import { IProductInput } from "@/types"
import {Document, Model, model, models, Schema } from "mongoose";


export interface IProduct extends Document ,IProductInput{
    _id: string
    createdAt: Date
    updatedAt: Date
}
const productSchema = new Schema<IProduct>(
    {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    images:  [String],
    description: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    isPublished: { type: Boolean, required: true },
    listPrice: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    tags: { type: [String], default: ['New arrival'] },
    sizes: { type: [String], default: ['S','M','L'] },
    colors: { type: [String], default: ['White','Red','Black']  },
    avgRating: { type: Number, required: true,default:0 },
    numReviews: { type: Number, required: true, default:0 },
    ratingDistribution: [
        {
            rating:{
                type:Number,
                required:true,
            },
            count:{
                type:Number,
                required:true,
            },
        },
    ],
    reviews:[ 
        {
       type: Schema.Types.ObjectId,
       ref: 'Review',
       default:[]
    },
],
 
  
    numSales:{
        type: Number,
        required: true,
        default:0,
    },
 
},
  {
    timestamps: true,
  }

);
const Product = (models.Product as Model<IProduct>) || model<IProduct>('Product', productSchema);
export default Product