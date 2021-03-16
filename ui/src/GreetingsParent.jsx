import React from "react";
import GreetingAdd from "./GreetingAdd.jsx";
import AllGreetingMessages from "./AllGreetingMessages.jsx";

export default class GreetingsParent extends React.Component {
  constructor() {
    super();
    this.state = { greetingsData: [] };
    this.createGreeting = this.createGreeting.bind(this);
  }

  componentDidMount() {
        this.loadData();
  }

  //about GraphQL queries: A query is sent to the server that precisely describes its data needs. The server resolves that query and returns only the data the client asked for.
  async loadData() {
    const query = `query {
      greetingList {
        id name message
      }
    }`;
    const response = await fetch('http://localhost:5000/graphql', {
      
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query })
    });
    const result = await response.json();
    this.setState({ greetingsData: result.data.greetingList });
  }
  
  async createGreeting(greeting) {
    const query = `mutation {
      greetingAdd(greeting:{
        message: "${greeting.message}",
        name: "${greeting.name}"
      }){
        name
      }
    }`
    const response = await fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON. stringify({ query })
    });
    this.loadData();
  }

  render() {
    
    return (
      <div>
        <h1>Guest book</h1>
        <GreetingAdd createGreeting={this.createGreeting}/>
        <br/>
        <h3>Previous greetings:</h3>
        <AllGreetingMessages greetingsData={this.state.greetingsData} />
        
      </div>
    );
  }
}



