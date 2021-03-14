import React from "react";

const sampleGreeting = {
    message: 'hello', name: 'Pieta'
  };

export default class GreetingAdd extends React.Component {

    constructor() {
        super();
        setTimeout(() => {
          this.props.createGreeting(sampleGreeting);
        }, 500);
      }

  render() {
    return (
      <div>This is a placeholder for a form to add an greeting.</div>
    );
  }
}