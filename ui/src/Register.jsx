import React from 'react';
import signInButton from "./images/signinbutton.png";

export default class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: { signedIn: false, givenName: '' },
      };
      this.signOut = this.signOut.bind(this);
      this.signIn = this.signIn.bind(this);
    }

    componentDidMount() {
        const clientId = window.ENV.GOOGLE_CLIENT_ID;
    
        window.gapi.load("auth2", () => {
          if (!window.gapi.auth2.getAuthInstance()) {
            //this line initialises the Google library, which is needed in the following signin function
            window.gapi.auth2.init({ client_id: clientId });
          }
        });
      }
  
      async signIn() {
        try {
          const auth2 = window.gapi.auth2.getAuthInstance();
          const googleUser = await auth2.signIn();const givenName = googleUser.getBasicProfile().getGivenName();
          this.setState({ user: { signedIn: true, givenName } });
        } catch (error) {
          showError(`Error authenticating with Google: ${error.error}`);
        }
        }
    
        
  
    signOut() {
      this.setState({ user: { signedIn: false, givenName: '' } });
    }
  
    render() {
      const { user } = this.state;
      if (user.signedIn) {
        return (
          <>
            <h4>Welcome {user.givenName}!</h4>
            <button onClick={this.signOut}>Sign Out</button>
          </>
        );
      }

      return (
        <>
          <div>
          <button onClick={this.signIn}>
            <img
              src={signInButton}
              alt="Sign in"
            />
          </button>
        </div>
        </>
      );
    }
  }