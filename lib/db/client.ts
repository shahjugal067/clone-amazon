import { MongoClient, ServerApiVersion } from 'mongodb';

if(!process.env.MONGODB_URI){
    throw new Error('invalid/missing enviroment variables:"MONGODB_URI')
}
const uri = process.env.MONGODB_URI
const options = {
    serverApi: {
        version:ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
}

    let client: MongoClient
    if(process.env.NODE_ENV === 'development') {
        // in development mode use a global variable so that the value is preserved 
        // across module reloads caused by hot module replacement
        const globalWithMongo = global as typeof globalThis & {
            _mongoClient?: MongoClient
        }
        if(!globalWithMongo._mongoClient){
            globalWithMongo._mongoClient = new MongoClient(uri,options)
        }
        client = globalWithMongo._mongoClient

    }else{
        client = new MongoClient(uri,options)
    }
    export default client