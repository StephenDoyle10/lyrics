import React from "react";
import UserContext from './UserContext.js';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class LyricPostAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const user=this.context;
    

    e.preventDefault();
    const form = document.forms.lyricPostAdd;
    const lyricPost = {
      lyric: form.lyric.value,
      song: form.song.value,
      artist: form.artist.value,
      user: user.givenName,
      email: user.email
    };
    this.props.createLyricPost(lyricPost);
    form.lyric.value = "";
    form.song.value = "";
    form.artist.value = "";
  }

  render() {
    const user=this.context;
    if(user.signedIn){
    return (
      <div>
        <h3>Been inspired by some lyrics recently? Share the wealth!</h3>
        {/*onSubmit or onClick take a function as a value, which tells the program what to do when the action is taken:*/}
        
        <form name="lyricPostAdd" onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Lyric:</ControlLabel>
          <FormControl
            componentClass="textarea"
            name="lyric"
            placeholder="Enter lyric"
            rows={4}
          />
          <br />
          <ControlLabel>Song name:</ControlLabel>
          <FormControl type="text" name="song" placeholder="Enter song name" />
          <br />
          <ControlLabel>Enter artist:</ControlLabel>
          <FormControl type="text" name="artist" placeholder="Artist" />
          <br/>
          </FormGroup>
          <Button bsStyle="primary" type="submit">Submit</Button>
          
        </form>
      </div>
    )}
    else{
      return(
        <div>
        <h3>Been inspired by some lyrics recently? Share the wealth! Sign in to start posting.</h3>
        {/*onSubmit or onClick take a function as a value, which tells the program what to do when the action is taken:*/}
        
        <form name="lyricPostAdd" onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Lyric:</ControlLabel>
          <FormControl
            disabled
            componentClass="textarea"
            name="lyric"
            placeholder="Enter lyric...but you must sign in first!"
            rows={4}
          />
          <br />
          <ControlLabel>Song name:</ControlLabel>
          <FormControl disabled type="text" name="song" placeholder="Enter song name" />
          <br />
          <ControlLabel>Enter artist:</ControlLabel>
          <FormControl disabled type="text" name="artist" placeholder="Artist" />
          <br/>
          </FormGroup>
          <Button disabled bsStyle="primary" type="submit">Submit</Button>
          
        </form>
        
      </div>
      )
    }
  }
}

LyricPostAdd.contextType = UserContext;