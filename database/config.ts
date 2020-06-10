import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import  { URI, dbName } from "../keys/appConstants.ts";

class Database  {

  /**
   *  Database Connectivity
   */
  
   //Fields
   client: any;
   db: any;
   collection: any;
   
   constructor(collectionName: string) {
    const client = new MongoClient();
    client.connectWithUri(URI);
    this.db = client.database(dbName);
    this.collection = this.db.collection(collectionName);
  }
}


export default Database;