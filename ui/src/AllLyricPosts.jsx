import React from "react";
import UserContext from "./UserContext.js";
import { Button, Glyphicon, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Panel, FormGroup, FormControl, ButtonToolbar } from "react-bootstrap";

class ASingleLyricPost extends React.Component {
  constructor(props) {
    super(props);
    const {
      lyric,
      song,
      artist,
      user: givenName,
      email,
    } = this.props.lyricpost;

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
    const moderatorEmail = "spreaddoyle@gmail.com";
    const deleteTooltip = (
      <Tooltip id="delete-tooltip" placement="top">
        Delete post
      </Tooltip>
    );
    const lyricpostBody = (
      <p className="lyricPostData">
        <span className="songName">{lyricpost.song}</span> by {lyricpost.artist}
        <br />
        <br />'{lyricpost.lyric}'<br />
        <br />- posted by {lyricpost.user}
      </p>
    );

    if (user.email == lyricpost.email || user.email == moderatorEmail) {
      return (
        <Panel>
          <Panel.Body>
            {lyricpostBody}

            {
              /* In this 'if statement', edit forms are hidden from user if inputLinkClicked is set to false. If set to true (for example, by clicking on the edit button and activating the toggleEditForm function), then the edit forms appear */
              !this.state.inputLinkClicked ? (
                <ButtonToolbar>
                <Button onClick={this.toggleEditForm}>Edit</Button>
                <OverlayTrigger delayShow={500} overlay={deleteTooltip}>
              <Button
                bsSize="small"
                onClick={() => {
                  this.props.deleteLyricPost(lyricpost.id);
                }}
              >
                <Glyphicon glyph="trash" />
              </Button>
            </OverlayTrigger>
            </ButtonToolbar>
              ) : (
                <OverlayTrigger delayShow={500} overlay={deleteTooltip}>
              <Button
                bsSize="small"
                onClick={() => {
                  this.props.deleteLyricPost(lyricpost.id);
                }}
              >
                <Glyphicon glyph="trash" />
              </Button>
            </OverlayTrigger>


              )
            }

            

            <br />
            {this.state.inputLinkClicked ? (
              <form name="updateLyricPost" onSubmit={this.handleSubmit}>
                <br/>
                <FormGroup>
                  <FormControl
                    componentClass="textarea"
                    name="lyric"
                    value={this.state.lyric}
                    onChange={(e) => this.setState({ lyric: e.target.value })}
                    rows={4}
                  />
                  <br />
                  <FormControl
                    type="text"
                    name="song"
                    value={this.state.song}
                    onChange={(e) => this.setState({ song: e.target.value })}
                  />

                  <br />
                  <FormControl
                    type="text"
                    name="artist"
                    value={this.state.artist}
                    onChange={(e) => this.setState({ artist: e.target.value })}
                  />
                </FormGroup>
                <ButtonToolbar>
                  <Button type="submit">Submit changes</Button>
                  <Button type="button" onClick={this.toggleEditForm}>
                    Cancel
                  </Button>
                </ButtonToolbar>
              </form>
            ) : (
              <div></div>
            )}
          </Panel.Body>
        </Panel>
      );
    } else {
      return (
        <Panel>
          <Panel.Body>{lyricpostBody}</Panel.Body>
        </Panel>
      );
    }
  }
}

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

ASingleLyricPost.contextType = UserContext;

