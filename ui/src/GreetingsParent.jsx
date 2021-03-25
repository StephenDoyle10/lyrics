import React from "react";
import GreetingAdd from "./GreetingAdd.jsx";
import AllGreetingMessages from "./AllGreetingMessages.jsx";



export default class GreetingsParent extends React.Component {
  constructor() {
    super();
    this.state = { greetingsData: [] };
    this.createGreeting = this.createGreeting.bind(this);
    this.updateGreeting = this.updateGreeting.bind(this);
    this.deleteGreeting = this.deleteGreeting.bind(this);
    this.uRLEndpoint = "http://localhost:5000/graphql"
  }

  

  componentDidMount() {
    this.loadData();
  }

  //about GraphQL queries: A query is sent to the server that precisely describes its data needs. The server resolves that query and returns only the data the client asked for.
  async loadData() {
    const query = `query {
      greetingList {
        _id id name message
      }
    }`;
    console.log(JSON.stringify(query));
    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
    this.setState({ greetingsData: result.data.greetingList });
  }

  async createGreeting(greeting) {
    const query = `mutation greetingAdd($greeting: GreetingInputs!){
      greetingAdd(greeting: $greeting){
        id
      }
    }`;

    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { greeting } }),
    });
    
    this.loadData();
  }

  async updateGreeting(id, changes){
    const query = `mutation greetingUpdate($id:Int!,$changes: GreetingInputs!){
      greetingUpdate(id: $id, changes:$changes){
        _id id name message
      }
    }`;
    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { id, changes } }),
    });
    this.loadData()
    
  }

  async deleteGreeting(id){
    const query = `mutation greetingDelete($id:Int!){
      greetingDelete(id: $id)
    }`;
    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { id } }),
    });
    this.loadData()
    
  }

  render() {
    return (
      <div>
        <h1>Guest book</h1>
        <GreetingAdd createGreeting={this.createGreeting} />
        <br />
        <h3>Previous greetings:</h3>
        <AllGreetingMessages greetingsData={this.state.greetingsData} updateGreeting={this.updateGreeting} deleteGreeting={this.deleteGreeting}/>
      </div>
    );
  }
}

