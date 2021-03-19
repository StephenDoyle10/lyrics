const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const fs = require('fs');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost/GuestBook';

let aboutMessage = "Guest Book API v1.0";


//
async function createUniqueIdForDocument(name) {
    const result = await db.collection('counters').findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false },
    );
    return result.value.current;
  }

const resolvers = {
    Query: {
        about: () => aboutMessage,
        greetingList,
        
    },
    Mutation: {
        setAboutMessage,
        greetingAdd,
        greetingUpdate,
        greetingDelete
    },
};

function setAboutMessage(_, { message }) {
    return aboutMessage = message;
}

async function greetingList(){
    const greetingsData = await db.collection('greetingMessages').find({}).toArray();
    return greetingsData;
    }

async function connectToDb() {
    const client = new MongoClient(url, { useNewUrlParser: true });
    await client.connect();
    console.log('Connected to MongoDB at', url);
    db = client.db();
}    

async function greetingAdd(_, { greeting }){
    greeting.id = await createUniqueIdForDocument('greetings');
    await db.collection('greetingMessages').insertOne(greeting);
    {/* alternative code:
        
    const result = await db.collection('greetingMessages').insertOne(greeting);
    const savedGreeting = await db.collection('greetingMessages').findOne({ _id: result.insertedId })
    return savedGreeting
    */}
    
}

async function greetingUpdate(_, { id, changes }){
    
    await db.collection('greetingMessages').updateOne({id},{$set:changes})
    
    {/*
    const savedGreeting = await db.collection('greetingMessages').findOne({id});
    return savedGreeting 
    */}
}

async function greetingDelete(_, { id }){
    
    await db.collection('greetingMessages').deleteOne({ id });
    {/*return*/}
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync('./schema.graphql', 'utf-8'),
    resolvers,
})

const app = express();

server.applyMiddleware({ app, path: '/graphql' });

const port = 5000;

(async function () {
    try {
        await connectToDb();
    
            app.listen(port, function() {
                console.log(`App started on port ${port}`)
            });
    } catch (err) {
        console.log('ERROR:', err);
    } 
   })()