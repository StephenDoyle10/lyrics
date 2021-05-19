import React from "react";
import LyricPostAdd from "./LyricPostAdd.jsx";
import AllLyricPosts from "./AllLyricPosts.jsx";
import Register from "./Register.jsx";
import UserContext from './UserContext.js';

import "./App.css";

export default class GreetingsParent extends React.Component {
  constructor() {
    super();
    this.state = { 
      lyricpostsList: [],
      user: { signedIn: false }
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.createLyricPost = this.createLyricPost.bind(this);
    this.updateLyricPost = this.updateLyricPost.bind(this);
    this.deleteLyricPost = this.deleteLyricPost.bind(this);
    this.createUser = this.createUser.bind(this);
    this.uRLEndpoint = window.ENV.UI_API_ENDPOINT;
  }

  async componentDidMount() {
    
    const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
    const response = await fetch(`${apiEndpoint}/user`, {
      method: 'POST',
      credentials: 'include',
    });
    const body = await response.text();
    const result = JSON.parse(body);
    const { signedIn, givenName, email} = result;
    this.setState({ user: { signedIn, givenName, email} });
    this.loadData();
  }

  onUserChange(user){

    this.setState({ user });
  }

  //about GraphQL queries: A query is sent to the server that precisely describes its data needs. The server resolves that query and returns only the data the client asked for.
  async loadData() {
    const query = `query{lyricpostsList{
      _id id lyric song artist user email
    }}`;
    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();

    this.setState({ lyricpostsList: result.data.lyricpostsList });
  }

  async createLyricPost(lyricPostA) {
    const query = `mutation ($lyricPostA:LyricPostInputs!){
      lyricPostAdd(lyricPost:$lyricPostA){
        id
    }
    }`;

    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { lyricPostA } }),
    });
    const body = await response.text();
    const result = JSON.parse(body);
    if (result.errors) {
      const error = result.errors[0];
      alert(`${error.extensions.code}: ${error.message}`);
    }else {
      this.loadData();
      alert("Lyric successfully added!");
    }
  }

  async updateLyricPost(id, changes) {
    const query = `mutation lyricPostUpdate($id:Int!,$changes: LyricPostInputs!){
      lyricPostUpdate(id: $id, changes:$changes){
        _id id song
      }
    }`;

    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { id, changes } }),
    });

    const body = await response.text();
    const result = JSON.parse(body);
    if (result.errors) {
      const error = result.errors[0];
      alert(`${error.extensions.code}: ${error.message}`);
    } else {
      this.loadData();
      alert("Lyric successfully updated!");
    }
  }

  async deleteLyricPost(id) {
    const query = `mutation lyricPostDelete($id:Int!){
      lyricPostDelete(id: $id)
    }`;
    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { id } }),
    });
    const body = await response.text();
    const result = JSON.parse(body);
    if (result.errors) {
      const error = result.errors[0];
      alert(`${error.extensions.code}: ${error.message}`);
    } else {
      this.loadData();
      alert("Lyric successfully deleted.");
    }
  }

  async createUser(foo) {
    const query = `mutation ($foo:UserInputs!){
      userAdd(foo:$foo){
        id
    }
    }`;

    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { foo } }),
    });
    
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <h1>Lyrics to Live By</h1>
        <UserContext.Provider value={user}>
          <Register
            onUserChange = {this.onUserChange}
            createUser={this.createUser} />
        
          <LyricPostAdd 
            createLyricPost={this.createLyricPost} />
        
          <br />
          <h3>Previously added lyrics:</h3>
          <AllLyricPosts
            onUserChange = {this.onUserChange}
            lyricpostsList={this.state.lyricpostsList}
            updateLyricPost={this.updateLyricPost}
            deleteLyricPost={this.deleteLyricPost}
          />
        </UserContext.Provider>
      </div>
    );
  }
}