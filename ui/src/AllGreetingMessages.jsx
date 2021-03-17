import React from "react";

class ASingleGreetingMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.greeting.message,
      name: this.props.greeting.name,
      inputLinkClicked: false,
    };
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  toggleEditForm() {
    if (this.state.inputLinkClicked) {
      this.setState({
        inputLinkClicked: false,
      });
    } else {
      this.setState({
        inputLinkClicked: true,
      });
    }
  }

  render() {
    const { greeting } = this.props;
    return (
      <div>
        <p>
          {greeting.id}. '{greeting.message}' - {greeting.name}
        </p>

        {this.state.inputLinkClicked ? (
          <div></div>
        ) : (
          <button onClick={this.toggleEditForm}>Edit</button>
        )}

        <button>Delete</button>

        <br />
        {this.state.inputLinkClicked ? (
          <form name="greetingEdit">
            <textarea
              type="text"
              name="message"
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
              rows="4"
              cols="40"
            />
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              size="40"
            />
            <br />
            <button type="button">Submit changes</button>
            <button type="button" onClick={this.toggleEditForm}>
              Cancel
            </button>
          </form>
        ) : (
          <div></div>
        )}
        <br />
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

