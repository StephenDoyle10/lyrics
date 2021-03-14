***Changes from branch 06a to 07a
So far, all our code has been stored in a folder called 'ui'. Ultimately our project's code will actually be divided into two main folders: 'ui' and 'api'. We will be introducing the 'api' folder in this step, as well as GraphQL, which we will be using to make our API calls to MongoDB.

First, we add an api folder in the root director. Ultimately we will be using two servers, one for the ui and one for api related stuff, so we need to create a new package.json file with 'npm init'. Then we need to install the packages 'apollo-server-express', 'express', 'nodemon', and 'graphql'. In the package.json file we change the start script to "start": "nodemon -e js,graphql server.js", so that the server restarts when there are any saved changes, which will save us a bit of time and effort.

We created a file in the api folder called schema.graphql, which details how we can interact with data.

We created a server.js file in the api folder. 

We had to change our loadData function in the ui/src/GreetingsParent.jsx file. Previously this function was merely retrieving data from a local variable, but now we want to retrieve this data with GraphQL. 




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