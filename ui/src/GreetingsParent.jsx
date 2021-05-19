import React from "react";
import LyricPostAdd from "./LyricPostAdd.jsx";
import AllLyricPosts from "./AllLyricPosts.jsx";
import Register from "./Register.jsx";
import './App.css';
import UserContext from './UserContext.js';



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
    this.uRLEndpoint = window.ENV.UI_API_ENDPOINT;
  }

  
  

  async componentDidMount() {
    
    const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
    const response = await fetch(`${apiEndpoint}/user`, {
      method: 'POST',
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
      _id id lyric song artist user
    }}`;
    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { lyricPostA } }),
    });
    
    this.loadData();
  }

  async updateLyricPost(id, changes){
    const query = `mutation lyricPostUpdate($id:Int!,$changes: LyricPostInputs!){
      lyricPostUpdate(id: $id, changes:$changes){
        _id id song
      }
    }`;
    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { id, changes } }),
    });
    this.loadData()
    
  }

  async deleteLyricPost(id){
    const query = `mutation lyricPostDelete($id:Int!){
      lyricPostDelete(id: $id)
    }`;
    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { id } }),
    });
    this.loadData()
    
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <h1>Lyrics to Live By</h1>
        <UserContext.Provider value={user}>
          <Register user={user} onUserChange={this.onUserChange}/>
          <LyricPostAdd user={user} createLyricPost={this.createLyricPost} />
          <br />
          <h3>Previous added lyrics:</h3>
          <AllLyricPosts lyricpostsList={this.state.lyricpostsList} updateLyricPost={this.updateLyricPost} deleteLyricPost={this.deleteLyricPost}/>
        </UserContext.Provider>
      </div>
    );
  }
}

