import React from "react";
const initialGreetingsData = require("./data.js");


//
class ASingleGreetingMessage extends React.Component {
  render() {
    const { greeting } = this.props;
    return (
      <div>
        <p>
          {greeting.id}. '{greeting.message}' - {greeting.name}
        </p>
      </div>
    );
  }
}



export default class Greetings extends React.Component {
    constructor(){
        super();
        this.state= { initialGreetingsData: []}; 
    }

    componentDidMount(){
      this.loadData();
    }

    loadData() {
      this.setState( {initialGreetingsData: initialGreetingsData})
    }

  render() {
    const allGreetingMessages = this.state.initialGreetingsData.map((i) => (
        <ASingleGreetingMessage key={i.id} greeting={i} />
      ));
    return (
      <div>
        <h1>Guest book</h1>
        <div>{allGreetingMessages}</div>
      </div>
    );
  }
}

