import React from "react";
import LyricPostAdd from "./LyricPostAdd.jsx";
import AllLyricPosts from "./AllLyricPosts.jsx";
import Register from "./Register.jsx";

import './App.css';



export default class GreetingsParent extends React.Component {
  constructor() {
    super();
    this.state = { lyricpostsList: [] };
    this.createLyricPost = this.createLyricPost.bind(this);
    this.updateLyricPost = this.updateLyricPost.bind(this);
    this.deleteLyricPost = this.deleteLyricPost.bind(this);
    this.createUser = this.createUser.bind(this);
    this.uRLEndpoint = "http://localhost:5000/graphql"
  }

  
  

  componentDidMount() {
    this.loadData();
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

  async createUser(foo) {
    const query = `mutation ($foo:UserInputs!){
      userAdd(foo:$foo){
        id
    }
    }`;

    const response = await fetch(this.uRLEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { foo } }),
    });
    
  }

  render() {
    return (
      <div>
        <Register createUser={this.createUser}/>
        <h1>Lyrics to Live By</h1>
        <LyricPostAdd createLyricPost={this.createLyricPost} />
        <br />
        <h3>Previous added lyrics:</h3>
        <AllLyricPosts lyricpostsList={this.state.lyricpostsList} updateLyricPost={this.updateLyricPost} deleteLyricPost={this.deleteLyricPost}/>
      </div>
    );
  }
}

