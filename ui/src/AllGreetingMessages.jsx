import React from "react";

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
  
export default class AllGreetingMessages extends React.Component {
    render() {
        //console.log(this.props.greetingsData);
      const allGreetingMessages = this.props.greetingsData.map((i) => (
        <ASingleGreetingMessage key={i.id} greeting={i} />
      ));
      return <div>{allGreetingMessages}</div>;
    }
  }
  
  