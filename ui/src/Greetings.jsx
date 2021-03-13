import React from "react";
const greetingsData = require("./data.js");

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

const allGreetingMessages = greetingsData.map((i) => (
  <ASingleGreetingMessage key={i.id} greeting={i} />
));

export default class Greetings extends React.Component {
  render() {
    return (
      <div>
        <h1>Guest book</h1>
        <div>{allGreetingMessages}</div>
      </div>
    );
  }
}

