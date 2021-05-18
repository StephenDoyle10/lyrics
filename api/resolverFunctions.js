const { createUniqueIdForDocument } = require('./db.js');
const { mustBeSignedIn } = require('./auth.js');

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

module.exports = { 
    list,
    add: mustBeSignedIn(add),
    update: mustBeSignedIn(update),
    remove: mustBeSignedIn(remove) }