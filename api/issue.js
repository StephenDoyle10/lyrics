const { createUniqueIdForDocument } = require('./db.js');

async function list(){
    const greetingsData = await db.collection('greetingMessages').find({}).toArray();
    return greetingsData;
    }

 

async function add(_, { greeting }){
    greeting.id = await createUniqueIdForDocument('greetings');
    await db.collection('greetingMessages').insertOne(greeting);
    {/* alternative code:
        
    const result = await db.collection('greetingMessages').insertOne(greeting);
    const savedGreeting = await db.collection('greetingMessages').findOne({ _id: result.insertedId })
    return savedGreeting
    */}
    
}

async function update(_, { id, changes }){
    
    await db.collection('greetingMessages').updateOne({id},{$set:changes})
    
    {/*
    const savedGreeting = await db.collection('greetingMessages').findOne({id});
    return savedGreeting 
    */}
}

async function remove(_, { id }){
    
    await db.collection('greetingMessages').deleteOne({ id });
    {/*return*/}
}

module.exports = { list, add, update, remove }