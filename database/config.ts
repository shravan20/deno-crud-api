import { init, MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";



export const connectToDB = async () => {
  
  const URI: string = "mongodb://localhost:27017";
  const dbName: string = "playWithDeno";
  // console.log(await init(URI));
  const client = await new MongoClient();
  await client.connectWithUri(URI);
  console.log(client)
  const db = client.database(dbName);
  const collection = db.collection("users");
  return collection;

};

