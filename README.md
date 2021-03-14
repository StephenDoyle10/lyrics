
***Changes from branch 03 to 04a
Eventually our data will be stored externally on a MongoDB database, and retrieved, updated, etc using GraphQL. But before we get into that, let's see if we can store the data locally in our code and see if we retrieve it and display it from there.

We managed this by creating a new file called data.js in the ui/src folder. In this file we created some data for demonstration purposes - three greeting messages. This mimics the type of data we will be getting from users when the web page is up and running and goes live. When we do start getting user messages, we want to know that we'll be able to access and display them properly, and that is the purpose of this dummy data.

We created a new file in ui/src folder called Greetings.jsx. This is where we created code to access this data, and then to display it. The next step will be creating code so that we add a message to this locally stored data, and get that message to display also.