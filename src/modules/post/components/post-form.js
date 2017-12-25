
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
        <div>
          <AppBar>
            <Toolbar>
              <IconButton color="contrast" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography type="title" color="inherit" style={{ flex: 1 }}>
                {this.props.addMode ? "Add New Post " : "Edit Post"}
              </Typography>
              <Button color="contrast" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>

          <form onSubmit={this.handleSubmit}>
            <div className="form-control">
              <TextField
                name="title"
                floatingLabelText="Title"
              />
            </div>

            <div className="form-control">
              <TextField
                name="body"
                multiLine
                floatingLabelText="Write body here"
              />
            </div>
            <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
              <Button
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
              />
              <Button
                type="submit"
                label="Submit"
                primary={true}
              />

            </div>
          </form>
        </div>

      </Dialog>
    )
  }
}