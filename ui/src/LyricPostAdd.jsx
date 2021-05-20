import React from "react";
import UserContext from './UserContext.js';
import { Button } from 'react-bootstrap';

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
          <textarea
            type="text"
            name="lyric"
            placeholder="lyric"
            rows="4"
            cols="40"
          />
          <br />
          <input type="text" name="song" placeholder="song" />
          <br />
          <input type="text" name="artist" placeholder="artist" />
          <br/>
          <Button bsStyle="primary" type="button">Submit</Button>
        </form>
      </div>
    )}
    else{
      return(
        <div>
        <h3>Been inspired by some lyrics recently? Share the wealth!</h3>
        {/*onSubmit or onClick take a function as a value, which tells the program what to do when the action is taken:*/}
        
        <form>
          <textarea
            disabled
            type="text"
            name="lyric"
            placeholder="lyric...but sign in first!"
            rows="4"
            cols="40"
          />
          <br />
          <input disabled type="text" name="song" placeholder="song"/>
          <br />
          <input disabled type="text" name="artist" placeholder="artist"/>
          <br/>
          <Button bsStyle="default" type="button" disabled>Submit</Button>
        </form>
      </div>
      )
    }
  }
}

LyricPostAdd.contextType = UserContext;