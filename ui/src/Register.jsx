import React from "react";

export default class Register2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showing: false,
        disabled: true
      };
      this.signIn = this.signIn.bind(this);
      this.signOut = this.signOut.bind(this);
    }

    componentDidMount() {
      const clientId = window.ENV.GOOGLE_CLIENT_ID;

      window.gapi.load('auth2', () => {
        if (!window.gapi.auth2.getAuthInstance()) {
          //this line initialises the Google library, which is needed in the following signin function
          window.gapi.auth2.init({ client_id: clientId })
        }
      });
    }


   async signIn() {
    let googleToken;
    try {
      const auth2 = window.gapi.auth2.getAuthInstance();
      const googleUser = await auth2.signIn();
      googleToken = googleUser.getAuthResponse().id_token;
    } catch (error) {
      alert(`Error authenticating with Google: ${error.error}`);
    }

    try {
      const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
      const response = await fetch(`${apiEndpoint}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ google_token: googleToken }),
      });
      const body = await response.text();
      const result = JSON.parse(body);
      const { signedIn, givenName } = result;

      const { onUserChange } = this.props;
      onUserChange({ signedIn, givenName});
    } catch (error) {
      alert(`Error signing into the app: ${error}`);
    }
  }

  async signOut(){
    const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
    try {
      await fetch(`${apiEndpoint}/signout`, {
        method: 'POST',
      });
      const auth2 = window.gapi.auth2.getAuthInstance();
      await auth2.signOut();
      const { onUserChange } = this.props;
      onUserChange({ signedIn: false, givenName:''});
    } catch (error) {
      alert(`Error signing out: $(error)`);
    }
  }
  
    render() {
      const { user } = this.props;
      
      if(user.signedIn){
        return(
          <>
          <h4>Welcome {user.givenName}!</h4>
          <button onClick={this.signOut}>Sign Out</button>
          </>
        )
      }

      else {
      return (
        <div>

          <button onClick={this.signIn}>
            <img src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png" alt="Sign in" />
          </button>
        </div>
      );}
    }
  }


  /*<h3>Please enter a username and password to create an account</h3>
          onSubmit or onClick takes a function as a value, which tells the program what to do when the action is taken:
          <form name="register" onSubmit={this.signIn}>
            
            <input type="text" name="username" placeholder="username" />
            <br />
            <input type="text" name="password" placeholder="password" />
            <br/>
            <input type="text" name="passwordConfirm" placeholder="confirm password" />
            <br/>
            
            <button>Submit</button>
          </form>*/