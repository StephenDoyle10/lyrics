import React from "react";

export default class GreetingAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.greetingAdd;
    const greeting = {
      message: form.message.value,
      name: form.name.value,
    };
    this.props.createGreeting(greeting);
    form.message.value = "";
    form.name.value = "";
  }

  render() {
    return (
      <div>
        <h3>Welcome to the guest book. Please leave a message, whether a joke, a favourite quote or lyric, or just a simple 'hello'!</h3>
        {/*onSubmit or onClick take a function as a value, which tells the program what to do when the action is taken:*/}
        <form name="greetingAdd" onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            name="message"
            placeholder="message"
            rows="4"
            cols="40"
          />
          <br />
          <input type="text" name="name" placeholder="name" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

