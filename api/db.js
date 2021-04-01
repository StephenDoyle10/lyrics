const { MongoClient } = require('mongodb');
require('dotenv').config();



async function connectToDb() {
    const url = process.env.DB_URL;
    const client = new MongoClient(url, { useNewUrlParser: true });
    await client.connect();
    console.log('Connected to MongoDB at', url);
    db = client.db();
} 

async function createUniqueIdForDocument(name) {
    const result = await db.collection('counters').findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false },
    );
    return result.value.current;
}

module.exports = { connectToDb, createUniqueIdForDocument}
  

