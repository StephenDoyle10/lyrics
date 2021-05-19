import React from "react";
import UserContext from './UserContext.js';

class ASingleLyricPost extends React.Component {
  constructor(props) {
    super(props);
    const { lyric, song, artist, user:givenName, email } = this.props.lyricpost;

    this.state = {
      lyric,
      song,
      artist,
      givenName,
      email,
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
  async handleSubmit(e) {
    e.preventDefault();

    const form = document.forms.updateLyricPost;

    const changes = {
      lyric: form.lyric.value,
      song: form.song.value,
      artist: form.artist.value,
      user: this.state.givenName,
      email: this.state.email,
    };
    const id = this.props.lyricpost.id;
    this.props.updateLyricPost(id, changes);
    this.toggleEditForm();
  }

  render() {
    const { lyricpost } = this.props;
    const user = this.context;
    return (
      <div>
        <p className="lyricPostData">
          '{lyricpost.lyric}'<br />
          <br />
          <span className="songName">{lyricpost.song}</span> by{" "}
          {lyricpost.artist}
          <br />
          <br />- posted by {lyricpost.user}
        </p>

        {
          /* In this if statement, edit forms are hidden from user if inputLinkClicked is set to false. If set to true (for example, by clicking on the edit button and activating the toggleEditForm function), then the edit forms appear */
          this.state.inputLinkClicked ? (
            <div></div>
          ) : (
            <button onClick={this.toggleEditForm}>Edit</button>
          )
        }

        <button
          type="button"
          hidden={!user.signedIn}
          onClick={() => {
            this.props.deleteLyricPost(lyricpost.id);
          }}
        >
          Delete
        </button>

        <br />
        {this.state.inputLinkClicked ? (
          <form name="updateLyricPost" onSubmit={this.handleSubmit}>
            <textarea
              type="text"
              name="lyric"
              value={this.state.lyric}
              onChange={(e) => this.setState({ lyric: e.target.value })}
              rows="4"
              cols="40"
            />
            <br />
            <input
              type="text"
              name="song"
              value={this.state.song}
              onChange={(e) => this.setState({ song: e.target.value })}
              size="40"
            />
            <br />
            <br />
            <input
              type="text"
              name="artist"
              value={this.state.artist}
              onChange={(e) => this.setState({ artist: e.target.value })}
              size="40"
            />
            <br />
            <input
              type="text"
              name="user"
              value={this.state.givenName}
              onChange={(e) => this.setState({ user: e.target.value })}
              size="40"
            />
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

ASingleLyricPost.contextType = UserContext;

export default class AllLyricPosts extends React.Component {
  render() {
    //key is needed below, when creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its’ children.
    const allLyricPosts = this.props.lyricpostsList
      .slice(0)
      .reverse()
      .map((i) => (
        <ASingleLyricPost
          key={i._id}
          lyricpost={i}
          updateLyricPost={this.props.updateLyricPost}
          deleteLyricPost={this.props.deleteLyricPost}
        />
      ));
    return <div>{allLyricPosts}</div>;
  }
}

