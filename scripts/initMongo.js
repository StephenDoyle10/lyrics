db.lyricPosts.remove({});

const initialLyricPosts = [
    {
      id: 1,
      lyric: `I've never included a name
In a song but I'm changing my ways for you Jonathan`,
      song: "Real Life",
      artist:"Joan as a Police Woman",
      user: "Stephen",

    },
    {
      id: 2,
      lyric: 
      `You with your dietary restriction
Said you loved me with a lot of conviction`,
      song: "French Navy",
      artist:"Camera Obscura",
      user: "Stephen",
    },
    { id: 3,
      lyric: `Worked 9 to 5 at Debenhams, rented a flat
I lasted until my lunch break and then I took off
There wasn't a moment to lose
I'd already wasted the morning selling another man shoes`,
      song: "Civilisation",
      artist:"Joe Gideon & The Shark",
      user: "Stephen",},
  ];

db.lyricPosts.insertMany(initialLyricPosts);
const count = db.lyricPosts.count();
print('Inserted', count, 'greetings messages');

db.counters.remove({ _id: 'lyrics' });
db.counters.insert({ _id: 'lyrics', current: count });

/*
To run this script (which will refresh all data and get rid of changes):
For using this script in locally-stored db = in terminal type - mongo GuestBook scripts/initMongo.js

For using this script in cloud-based database = in terminal type - mongo $DB-URL scripts/initMongo.js

($DB_URL will look something like this: mongodb+srv://${mongodb_username}:${mongodb_password}@cluster0.nimhz.mongodb.net/${database_name})

Recap on using mongo shell: 
1. In command line type mongo and click 'enter'. You are now in mongo shell.
2. type 'show dbs' to see all mongo databases on your device. If you have run this script you should see a database called GuestBook.
3. type 'use GuestBook' to move into that database.
4. type 'show collections' to see collections in the database. After running this script, you should see one collection, called 'greetingMessages'.
5. To check all the the objects contained in this collection type 'db.greetingMessages.find().pretty(). (the .pretty() suffix is optional...as the name suggests it just makes the output more palatable.)
*/