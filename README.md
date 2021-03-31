***Post script, extra features and housekeeping in branch 16:

1. added a function called createUniqueIdForDocument as we needed a way to assign each new document we created a unique id number. We did this by creating a new database called 'counters', that will always have just a single document, called 'greetings'. This document contains a property called 'current' which is a number that we have programmed to increase by 1 every time we create a new document in 'greetingMessages' collection. Thus this 'current' number stays unique we can grab it each time we create a new greetMessages document and asign it as that document's id.

2. API folder: up until now, all our JavaScript code on the API side has been in a single file - server.js. Keeping all JS code in one file is typically considered bad practice, especially as the project grows and that file gets bigger and unweildly. Instead, 'separation of concerns' is advised. This is the idea that each module in an app should only be responsible for one thing and should not contain code that deals with other things. Separating concerns reduces code complexity by breaking a large app down into many smalled units. We have already done that on the front-end and split our front-end code into a few different files. Now we will do that on the back-end. Ultimately, our server.js file will become 4 files: server.js, api_handler.js, db.js, and issue.js.

The server.js file sets up the express server and begins listening.

The api_handler.js file deals with the construction of the Apollo server, and the creation of the resolver object.

The db.js file which contains the function for connecting to MongoDB. It also contains the function for creating a unique ID for each document (see above)

The issue.js file has all our resolver functions.

Going forward: in this project I have deliberately set out to create as bare bones a project as possible, so it is possible to see essential and necessary code, without distracting extras. However such a barebones project would not be very impressive once deployed. Here are some things that could added to make the project a bit more professional and useful:

1. CSS and bootstrap

2. signup and login features: at the moment our project has full CRUD capabilities. However, without user registration, CRUS capabilities are not very effective, as anyone can visit the website and delete and edit any of the content. If we introduce registration, then only the user who created the content can edit or delete it.

3. We would want to store our environment variables in a serparate fill called .env, and then install dotenv package so that we can access and use those variables. Some of our code contains things like secret keys and passwords. If we keep such confidential information in a file called .env, and then add that file to a .gitignore file, then our confidential information would not be pushed to github when we commit and push our code.

4. move our MongoDB database to the cloud (with Mongo Atlas) so that we can deploy our app, and so the database is no longer on our local machine





***Changes from branch 14 to 15

The final step - add the delete API created in the previous step to the UI so users can delete posts from the webpage. This will be a similar setup to implementing our edit API to UI. We add a function called deleteGreeting in GreetingsParent.jsx file. We bind this and pass it down to floors to ASingleGreetingMessage. We add a property to the HTML button element: 
onClick={() => { this.props.deleteGreeting(greeting.id); }
so when the delete button is clicked, the deleteGreeting function is activated, and, ultimately, the message is deleted, and the data is reloaded so the page is refreshed, and no longer contains the deleted message.

And that's it, we now have a MERN stack project with full CRUD capabilities, striped down to its bare essentials. This would be a solid template and foundation for more ambitious projects.



***Changes from branch 13 to 14

All that's left is to be able to delete messages from the UI, and we have a MERN stack project with full CRUD capabilities, albeit a very basic one.

We have to change the same types of thing to the code as when we added an edit api

1. add a greetingDelete to the mutation list in the schema

2. create a function called greetingDelete in api/server.js

3. in the same file, add this function to list of resolvers

At this point, you can test if this is working in localhost:5000/playground:  
mutation {
  greetingDelete(id: 4)
}

If you click submit after typing this, you should see document with id: 4 has been deleted.



***Changes from branch 12 to 13

Our update works in GraphQL playgroud, now to get it to work from the UI. Like we did when it came to adding a greeting, we will have a handleSubmit function which gathers the data from the forms (when they are submitted) and turns the data into suitable variables. Then those variables are passed as arguments to updateGreeting function, which is very similar to addGreeting function. The handleSubmit function is defined in the ASingleMessage component, while the updateGreeting is defined in the Greetings Parent component and passed down two levels to the ASingleMessage component via props.

Now onto delete!



***Changes from branch 11 to 12

In this branch we will add Updating functionality to our app so that users can edit/update their greeting messages, and their changes will be stored to the MongoDB and replace their existing messages.

For this we have to:

1. Add a greetingUpdate to the mutation list in the schema

2. create a function in api/server.js called greetingUpdate

3. in the same file, add this function to the resolvers variable

At this point, you can test if this is working in localhost:5000/playground:  mutation greetingUpdate($id:Int!,$changes: GreetingInputs!){
  greetingUpdate(id: $id, changes:$changes){
    id name message
  }
}

And in query variable box in playground: {"id":2, "changes": { "name": "eddie", "message": "hello"}}

If you click submit after typing this, you should see document with id: 2 has been updated.



***Changes from branch 10 to 11

We have Create and Read capabilities, now we just need Update and Delete capabilities and we have reached our goal. In this step we set up the formating and architecture to get ready for Update and Delete functionality.

We add an edit and delete button below each greeting message. The delete button doesn't do anything for now, we will deal with that in a later branch. The edit button, when clicked, opens up two new input fields on the screen that contain the existing message and name as values. The user can click into these input fields and change these values - ie edit/ update the data. There is a submit button under these fields so that when the user is happy with their editing they can click submit and their changes will be updated to the database. However, like the delete button, this submit button doesn't do anything yet. We will save that for a later branch.



***Changes from branch 09 to 10

So we can successfully retrieve/ read the data from a MongoDB database, and render it to the screen. That takes care of the R(ead) from the CRUD acronym. If we just do the C(reate), U(pdate/ edit), and D(elete), then we have completed our mission of creating a minimal MERN stack project that has full CRUD capabilities. In this step we will concentrate on the C(reate) part of the acronym.

To this end, all we had to do was makes a couple of changes to the greetingAdd function in api/server.js file.

Now we have C(reate) and R(ead) capabilities!



***Changes from branch 08a to 09

In the last two branches, the data has been stored locally in our code as variable called greetingsData which contained an array of objects: our data. This is ok for testing purposes but won't ride if the app is deployed. This is because the data has no persistence if it is stored locally - if you make additions to the data through user interaction, the data will be lost once the website is closed and reopened. That is why databases are so important. If data is stored on an external database like the ones hosted on MongoDB it will have persistence, the data will be stored and not lost. In this branch we will move our data over to MongoDB, and delete all instances of the data that are stored within our code as a variable.

First we need Mongo installed on our device. We also install mongodb on the api side as an NPM package.

You know the intial greetingsData that we have saved locally within our code? We want to add this code now to MongoDB database, and store it there instead of in our code. One way to do this is to create a script file. Lets create a script folder in our root directory, and in this folder create a file called initMongo.js. This contains a variable called 'greetingsData' that has a few greetings messages. After this variable in the file, there is a method 'db.greetingMessages.insertMany(greetingsData);' This method instructs the program to insert the greetingsData into a collection called greetingsMessages (if there is no such collection with this name, then one will be created). We run the script from the terminal with the command 'mongo GuestBook scripts/initMongo.js'. This instructs the programme to run the script in the GuestBook database (if there is no such database with this name, then one will be created). After running this script, a new database called 'GuestBook' will be created, with a collection called 'greetingMessages', which contains information about three greeting messages.

However, currently our app is not retrieving that data, and thus not displaying it. We do that by:

1. creating two variables in the api/server.js file - 
'const { MongoClient } = require('mongodb')' 
and 
'const url = 'mongodb://localhost/GuestBook''

2. change the greetingList function (in api/server.js)

3. add a connectToDb function (in api/server.js), which connects to the database

4. change the setup of the server to first connect with the database and then start the Express application (in api/server.js)

5. made a small change to schema.graphql to the Greeting type, as anytime a new document is made to a MongoDB collection, an id number is automatically generated. So we add this to to the Greeting type with "_id: ID!" Also, reflect this change on the loadData query variable in the GreetingsParent.jsx file by adding _id to the list of fields that are return by the query.

6. also, you can now delete the variable in the server.js where we were keeping our data, as this is now stored and retireved from a MongoDB database.



***Changes from branch 07a to 08a

In the last branch we used GraphQL to retireve locally stored data, which we then displayed on the webpage (the R(ead) of the CRUD acronym). Now we want to use GraphQL to be able to add to the data (the C(reate) of the CRUD acronym).

We must add a mutation type called greetingAdd to the schema.graphql file. Also, in this file we define what input we are expecting from the user in 'input GreetingInputs{}'.

We must add a function in the api server.js file called greetingAdd(), that takes as an argument an object, which contains the values of 'message' and 'name' input by the user. A unique id is automatically generated and added to the object. Then the object is pushed to the existing data: our array of greeting messages.

Then we have to completely overhaul our createGreeting function in our GreetingsParent.jsx file, so that it uses GraphQL to add a new message to the data.


***Changes from branch 06a to 07a

So far, all our code has been stored in a folder called 'ui'. Ultimately our project's code will actually be divided into two main folders: 'ui' and 'api'. We will be introducing the 'api' folder in this step, as well as GraphQL, which we will be using to make our API calls to MongoDB.

First, we add an api folder in the root director. Ultimately we will be using two servers, one for the ui and one for api related stuff, so we need to create a new package.json file with 'npm init'. Then we need to install the packages 'apollo-server-express', 'express', 'nodemon', and 'graphql'. In the package.json file we change the start script to "start": "nodemon -e js,graphql server.js", so that the server restarts when there are any saved changes, which will save us a bit of time and effort.

We created a file in the api folder called schema.graphql, which details how we can interact with data.

We created a server.js file in the api folder. We actually moved our intial greeting data into this file, and deleted our data.js file in our ui/src folder.

We had to change our loadData function in the ui/src/GreetingsParent.jsx file. Previously this function was merely retrieving data from a local variable, but now we want to retrieve this data with GraphQL. 

With both servers running, if you go to localhost:4000 you should see that our new loadData function, now using graphql, has been successful and our intial greetings data has been retrieved and is displayed on the webpage. The next step is to use GraphQL to create a new message that gets added to the data and displayed on the webpage. 




***Changes from branch 05a to 06a

Now that we are comfortable with our file structure, we will set up a form field and deal with event handling so that we can add a greeting to the temporary memory. This addition will not have any persisitence ie will not be saved anywhere, and when the browser closes this entry will be lost (that is why we need external databases like MongoDB, where additions are saved with persistence), but still this is an important step.

All the code additions to achieve this were in GreetingAdd.jsx file in the ui/src folder. We had to:

1. Add a form with two text inputs in the render

2. Add an onSubmit value to this form which tells the program what to do when the submit button is clicked. A function is always passed as this value, in this case the function given as the onSubmit value is handleSubmit, a function we will create now

3. Add a new function called handleSubmit. This function takes the two values that the user has input into the text field, and turns them into an object with two values ('message' and 'name') assigned to a variable named greeting. Then the previously ccreated function 'createGreeting' is called, with the new greeting object passed as an argument. This createGreeting function then adds the new object to our greetingsData, and updates the state of GreetingsParent, and so another greeting is added to our list of displayed greetings on our webpage.



***Changes from branch 04a to 05a

We stored some demo data stored locally in our code to see if we could successfully retireve and display that data on our web page. Now we want to see if we can add to that data through user interaction on the web-page.

Our webpage, by the end of this branch, although already small, can be split into two further parts: one part lists all the existing greeting messages, the other part contains a form to add a new message. We will have a component for each of these parts. The component for listing all existing messages (which we have already achieved in branch 04a) will be handled in the AllGreetingMessages.jsx file, the component for adding a new message will be handled in the GreetingAdd.jsx file. These two files will be siblings and will feed into the GreetingsParent.jsx file, which will contain the state and all the methods that deal with this state. We will change the structure of our project in this manner now, and deal with event handling and user interaction to add data in the next branch.



***Changes from branch 03 to 04a

Eventually our data will be stored externally on a MongoDB database, and retrieved, updated, etc using GraphQL. But before we get into that, let's see if we can store the data locally in our code and see if we retrieve it and display it from there.

We managed this by creating a new file called data.js in the ui/src folder. In this file we created some data for demonstration purposes - three greeting messages. This mimics the type of data we will be getting from users when the web page is up and running and goes live. When we do start getting user messages, we want to know that we'll be able to access and display them properly, and that is the purpose of this dummy data.

We created a new file in ui/src folder called Greetings.jsx. This is where we created code to access this data, and then to display it. The next step will be creating code so that we add a message to this locally stored data, and get that message to display also.
