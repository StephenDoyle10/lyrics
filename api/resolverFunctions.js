const { createUniqueIdForDocument } = require('./db.js');
const bcrypt = require('bcrypt');
const { mustBeSignedIn } = require('./auth.js');


async function list(_, args, req){
    
    const lyricPosts = await db.collection('lyricPosts').find({}).toArray();
    
    return lyricPosts;
    }

 

async function add(_, { lyricPost }){
    lyricPost.id = await createUniqueIdForDocument('lyrics');
    await db.collection('lyricPosts').insertOne(lyricPost);
    return lyricPost
    
    
}

async function update(_, { id, changes }){
    
    await db.collection('lyricPosts').updateOne({id},{$set:changes});
    const savedIssue = await db.collection('lyricPosts').findOne({ id });
    return savedIssue;
    
}

async function remove(_, { id }){
    
    await db.collection('lyricPosts').deleteOne({ id });
}

async function userAdd(_, { foo }, req){
    
    foo.id = await createUniqueIdForDocument('users');
    foo.password= await bcrypt.hash(foo.password, 10);
    db.collection('users').insertOne(foo);
    req.session.userId=foo.id;
    //console.log(req.session);
    
    

    return foo
    
    
}

module.exports = { 
    list,
    add: mustBeSignedIn(add),
    update: mustBeSignedIn(update),
    remove: mustBeSignedIn(remove),
    userAdd,
 }