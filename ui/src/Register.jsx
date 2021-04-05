import React from "react";

export default class Register extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.register;
        const username = form.username.value;
        const password = form.password.value;
        const passwordConfirm = form.passwordConfirm.value;
        
        if(password!==passwordConfirm){
            alert('Passwords did not match, please try again.');
            form.password.value = "";
            form.passwordConfirm.value = "";
        } else{
        const usernameAndPassword = {
            username,
            password
        };

        this.props.createUser(usernameAndPassword);
        alert(`Welcome ${username}, account successfully created!`);
        form.username.value = "";
        form.password.value = "";
        form.passwordConfirm.value = "";
    }


    }
  
    render() {
      return (
        <div>
          <h3>Please enter a username and password to create an account</h3>
          {/*onSubmit or onClick take a function as a value, which tells the program what to do when the action is taken:*/}
          <form name="register" onSubmit={this.handleSubmit}>
            
            <input type="text" name="username" placeholder="username" />
            <br />
            <input type="text" name="password" placeholder="password" />
            <br/>
            <input type="text" name="passwordConfirm" placeholder="confirm password" />
            <br/>
            
            <button>Submit</button>
          </form>
        </div>
      );
    }
  }