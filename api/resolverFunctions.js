const { createUniqueIdForDocument } = require('./db.js');

async function list(){
    const lyricPosts = await db.collection('lyricPosts').find({}).toArray();
    return lyricPosts;
    }

 

async function add(_, { lyricPost }){
    lyricPost.id = await createUniqueIdForDocument('lyrics');
    await db.collection('lyricPosts').insertOne(lyricPost);
    return lyricPost
    {/* alternative code:
        
    const result = await db.collection('greetingMessages').insertOne(greeting);
    const savedGreeting = await db.collection('greetingMessages').findOne({ _id: result.insertedId })
    return savedGreeting
    */}
    
}

async function update(_, { id, changes }){
    
    await db.collection('lyricPosts').updateOne({id},{$set:changes})
    
    {/*
    const savedGreeting = await db.collection('greetingMessages').findOne({id});
    return savedGreeting 
    */}
}

async function remove(_, { id }){
    
    await db.collection('lyricPosts').deleteOne({ id });
    {/*return*/}
}

module.exports = { list, add, update, remove }