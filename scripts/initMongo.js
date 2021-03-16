db.greetingMessages.remove({});

const greetingsData = [
    {
      id: 1,
      message: `Good morning, and in case I don't see ya, good afternoon, good evening and good night!`,
      name: "Truman Burbank",
    },
    {
      id: 2,
      message: `Hello, my name is Inigo Montoya. You killed my father. Prepare to die.`,
      name: "Inigo Montoya",
    },
    { id: 3, message: "Hello there", name: "General Kenobi" },
  ];

db.greetingMessages.insertMany(greetingsData);
const count = db.greetingMessages.count();
print('Inserted', count, 'greetings messages');

/*
Recap on using mongo shell:
1. In command line type mongo and click 'enter'. You are now in mongo shell.
2. type 'show dbs' to see all mongo databases on your device. If you have run this script you should see a database called GuestBook.
3. type 'use GuestBook' to move into that database.
4. type 'show collections' to see collections in the database. After running this script, you should see one collection, called 'greetingMessages'.
5. To check all the the objects contained in this collection type 'db.greetingMessages.find().pretty(). (the .pretty() suffix is optional...as the name suggests it just makes the output more palatable.)
*/