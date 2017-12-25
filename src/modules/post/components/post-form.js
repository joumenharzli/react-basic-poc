
import React from "react";

import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export class PostForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      title: event.target.title.value,
      body: event.target.body.value
    });
  };

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <Dialog
        fullScreen
        transition={Transition}
        open={this.props.open}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <AppBar style={{ position: 'relative' }}>
              <Toolbar>
                <IconButton color="contrast" onClick={this.handleClose} aria-label="Close">
                  <CloseIcon />
                </IconButton>
                <Typography type="title" color="inherit" style={{ flex: 1 }}>
                  {this.props.addMode ? "Add New Post " : "Edit Post"}
                </Typography>
                <Button color="contrast" type="submit" >
                  save
              </Button>
              </Toolbar>
            </AppBar>

            <Paper>
              <TextField
                style={{ width: '100%' }}
                name="title"
                label="Post title"
              />
              <TextField
                multiline
                style={{ width: '100%' }}
                name="body"
                label="Post body"
              />
            </Paper>
          </div>
        </form>
      </Dialog>
    )
  }
}