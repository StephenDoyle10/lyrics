import React from "react";

class ASingleLyricPost extends React.Component {
  
  constructor(props) {
    super(props);
    const { lyric, song, artist, user } = this.props.lyricpost;

    this.state = {
      lyric,
      song,
      artist,
      user,
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
  async handleSubmit(e){
    e.preventDefault();
    
    const form = document.forms.updateLyricPost;
    
    const changes = {
      lyric:form.lyric.value,
      song:form.song.value,
      artist:form.artist.value,
      user:form.user.value
    }
    const id = this.props.lyricpost.id;
    this.props.updateLyricPost(id, changes);
    this.toggleEditForm();


  }

  render() {
    const { lyricpost } = this.props;
    const { user: { signedIn } } = this.props;
    return (
      <div>
        <p className="lyricPostData">
          '{lyricpost.lyric}'<br/><br/>
          <span className="songName">{lyricpost.song}</span> by {lyricpost.artist}<br/><br/>
          - posted by {lyricpost.user}
        </p>

        {/* In this 'if statement', edit forms are hidden from user if inputLinkClicked is set to false. If set to true (for example, by clicking on the edit button and activating the toggleEditForm function), then the edit forms appear */
        this.state.inputLinkClicked ? (
          <div></div>
        ) : (
          <button onClick={this.toggleEditForm} hidden={!signedIn}>Edit</button>
        )}

        <button type="button" onClick={() => { this.props.deleteLyricPost(lyricpost.id); }} hidden={!signedIn}>Delete</button>

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
              value={this.state.user}
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

export default class AllLyricPosts extends React.Component {
  render() {
    //key is needed below, when creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its’ children.
    const allLyricPosts = this.props.lyricpostsList.map((i) => (
      <ASingleLyricPost 
        key={i._id} 
        lyricpost={i} 
        updateLyricPost={this.props.updateLyricPost} 
        deleteLyricPost={this.props.deleteLyricPost}
        user={this.props.user}
        onUserChange={this.props.onUserChange}/>
    ));
    return <div>{allLyricPosts}</div>;
  }
}

