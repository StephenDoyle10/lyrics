const { createUniqueIdForDocument } = require('./db.js');
const bcrypt = require('bcrypt');

async function list(){
    const lyricPosts = await db.collection('lyricPosts').find({}).toArray();
    return lyricPosts;
    }

 

async function add(_, { lyricPost }){
    lyricPost.id = await createUniqueIdForDocument('lyrics');
    await db.collection('lyricPosts').insertOne(lyricPost);
    return lyricPost
    
    
}

async function update(_, { id, changes }){
    
    await db.collection('lyricPosts').updateOne({id},{$set:changes})
    
}

async function remove(_, { id }){
    
    await db.collection('lyricPosts').deleteOne({ id });
}

async function userAdd(_, { foo }){
    foo.id = await createUniqueIdForDocument('users');
    foo.password= await bcrypt.hash(foo.password, 10);
    db.collection('users').insertOne(foo);
    return foo
    
    
}

module.exports = { list, add, update, remove, userAdd }