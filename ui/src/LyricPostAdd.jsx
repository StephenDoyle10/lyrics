import React from "react";

export default class LyricPostAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.lyricPostAdd;
    const lyricPost = {
      lyric: form.lyric.value,
      song: form.song.value,
      artist: form.artist.value,
      user: form.user.value,
    };
    this.props.createLyricPost(lyricPost);
    form.lyric.value = "";
    form.song.value = "";
    form.artist.value = "";
    form.user.value = "";
  }

  render() {
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
          <input type="text" name="user" placeholder="user" />
          <br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

