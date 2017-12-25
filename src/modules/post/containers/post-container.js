
import React from "react";

/* material */
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { CircularProgress } from 'material-ui/Progress';
import Snackbar from 'material-ui/Snackbar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';

import { PostList } from '../components/post-list';
import { PostForm } from '../components/post-form';
import { PostService } from '../services/post-service';

export class PostContainer extends React.Component {

  state = {
    posts: [],
    loaded: false,
    modal: false,
    addModal: true,
    toast: false,
    toastMessage: ""
  };

  constructor(props) {
    super(props);
    this.postService = new PostService();
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe((postsData) => {
      this.setState({ posts: postsData, loaded: true });
    });
  }

  handleSubmit(value) {
    this.addPost(value);
    this.handleClose();
  }

  handleClose() {
    this.setState({ modal: false });
  }

  addPost(post) {
    this.postService.addPost(post).subscribe((postData) => {
      this.setState({ posts: [postData, ...this.state.posts] });
      //      this.showAddToast();
    });
  }

  showAddModal() {
    this.setState({ modal: true, addModal: true });
    //this.showAddToast();
  }

  showAddToast() {
    this.setState({ toast: true, toastMessage: "Post added", toastAction: "UNDO" })
  }

  hideToast() {
    this.setState({ toast: false, toastMessage: null, toastAction: null })
  }

  render() {
    return (<div><AppBar position="fixed" style={{ width: "100%" }}>
      <Toolbar>
        <Typography type="title" color="inherit">
          Posts
      </Typography>
      </Toolbar>
    </AppBar>

      <div style={{ paddingTop: "80px", paddingRight: "16px", paddingLeft: "16px", display: "flex" }}>
        {this.state.loaded ?
          <PostList posts={this.state.posts} />
          : <CircularProgress style={{
            margin: 'auto'
          }} />}
      </div>

      <Button className="action-button"
        fab color="primary" aria-label="add"
        onClick={this.showAddModal.bind(this)}>
        <AddIcon />
      </Button>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.toast}
        message={this.state.toastMessage}
        action={this.state.toastAction}
        onRequestClose={this.handleRequestClose}
        autoHideDuration={4000}
      />


      <PostForm open={this.state.modal}
        addMode={this.state.addModal}
        onClose={this.handleClose.bind(this)}
        onSubmit={this.handleSubmit.bind(this)} />
    </div>)
  }

}