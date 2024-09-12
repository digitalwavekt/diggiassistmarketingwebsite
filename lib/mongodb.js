import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Use your MongoDB URI
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to preserve the client connection
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it’s best to create a new client connection per request
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
