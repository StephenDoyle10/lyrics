***Changes from branch 04a to 05a
We stored some demo data stored locally in our code to see if we could successfully retireve and display that data on our web page. Now we want to see if we can add to that data through user interaction on the web-page.

Our webpage, by the end of this branch, although already small, can be split into two further parts: one part lists all the existing greeting messages, the other part contains a form to add a new message. We will have a component for each of these parts. The component for listing all existing messages (which we have already achieved in branch 04a) will be handled in the AllGreetingMessages.jsx file, the component for adding a new message will be handled in the GreetingAdd.jsx file. These two files will be siblings and will feed into the GreetingsParent.jsx file, which will contain the state and all the methods that deal with this state. We will change the structure of our project in this manner now, and deal with event handling and user interaction to add data in the next branch.



***Changes from branch 03 to 04a
Eventually our data will be stored externally on a MongoDB database, and retrieved, updated, etc using GraphQL. But before we get into that, let's see if we can store the data locally in our code and see if we retrieve it and display it from there.

We managed this by creating a new file called data.js in the ui/src folder. In this file we created some data for demonstration purposes - three greeting messages. This mimics the type of data we will be getting from users when the web page is up and running and goes live. When we do start getting user messages, we want to know that we'll be able to access and display them properly, and that is the purpose of this dummy data.

We created a new file in ui/src folder called Greetings.jsx. This is where we created code to access this data, and then to display it. The next step will be creating code so that we add a message to this locally stored data, and get that message to display also.