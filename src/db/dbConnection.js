import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

export default async function databaseRun() {
    try {
      await client.connect();
      console.log("database connected successfully!");
      // database and collection code goes here
      const db = client.db("shop");
      const coll = db.collection("users");
      // find code goes here
      const cursor = coll.find({$and : [{name: 'Mahid ahmod'}, {age: 25}]});
      // iterate code goes here
      await cursor.forEach(console.log);
    } catch (err) {
      console.log("Database connection error : ", err);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
      console.log("Client closed");
    }
  }