import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MyFab from "./MyFab.js";

export default function FormDialog() {
  // useState returns the current state and the function that updates it
  // similar to this.state.count and this.setState
  const [formState, setState] = React.useState({
    open: false,
    email: "",
  });

  const handleEmailChange = (e) => {
      let newState = { ...formState, email: e.target.value };  
      setState(newState)
  }

  const handleClickOpen = () => {
    let newState = { ...formState, open: true };
    setState(newState);
  };

  const handleClose = () => {
    let newState = { ...formState, open: false };
    setState(newState);
  };

  return (
    <div>
      <MyFab alignment="right" onFabClick={handleClickOpen}></MyFab>
      <Dialog
        open={formState.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={formState.email}
            onChange={handleEmailChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
