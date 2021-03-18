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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*toggleEditForm function is necessary as we want the edit forms to be hidden unless a user clicks on the 'edit' button. This component has a state inputLinkClicked. When this is false, edit forms are hidden. When it is true (for example, by clicking on the edit button and activating the toggleEditForm function, inputLinkClicked is set to true, and edit forms are visible.*/
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
  async handleSubmit(e){
    e.preventDefault();
    
    const form = document.forms.greetingEdit;
    
    const changes = {
      message:form.message.value,
      name:form.name.value
    }
    const id = this.props.greeting.id;
    this.props.updateGreeting(id, changes);
    this.toggleEditForm();


  }

  render() {
    const { greeting } = this.props;
    return (
      <div>
        <p>
          {greeting.id}.'{greeting.message}' - {greeting.name}
        </p>

        {/* In this if statement, edit forms are hidden from user if inputLinkClicked is set to false. If set to true (for example, by clicking on the edit button and activating the toggleEditForm function), then the edit forms appear */
        this.state.inputLinkClicked ? (
          <div></div>
        ) : (
          <button onClick={this.toggleEditForm}>Edit</button>
        )}

        <button type="button">Delete</button>

        <br />
        {this.state.inputLinkClicked ? (
          <form name="greetingEdit" onSubmit={this.handleSubmit}>
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
            <button type="submit">Submit changes</button>
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
    //key is needed below, when creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its’ children.
    const allGreetingMessages = this.props.greetingsData.map((i) => (
      <ASingleGreetingMessage key={i._id} greeting={i} updateGreeting={this.props.updateGreeting}/>
    ));
    return <div>{allGreetingMessages}</div>;
  }
}

