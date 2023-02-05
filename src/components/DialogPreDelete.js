import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogPreDelete(props) {
  const handleDeleteClick = function (e) {
    props.toggleDeleteFeedOpen();
    props.handleDelete(props.deleteFeedID);
  };

  return (
    <div>
      <Dialog open={props.open}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deleting feed: {props.deleteFeedID} This will delete{' '}
            {props.deleteCount} entries. Do you wish to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.toggleDeleteFeedOpen}>Cancel</Button>
          <Button onClick={handleDeleteClick}>Delete Feed</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
