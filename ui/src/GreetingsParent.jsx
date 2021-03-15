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

  

  async loadData() {
    const query = `query {
      greetingList {
        id name message
      }
    }`;
    const response = await fetch('http://localhost:5000/grahql', {
      
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query })
    });
    const result = await response.json();
    this.setState({ greetingsData: result.data.greetingList });
  }
  
  createGreeting(greeting) {
    greeting.id = this.state.greetingsData.length + 1;
    greeting.created = new Date();
    const newGreetingList = this.state.greetingsData.slice();
    newGreetingList.push(greeting);
    this.setState({ greetingsData: newGreetingList });
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



