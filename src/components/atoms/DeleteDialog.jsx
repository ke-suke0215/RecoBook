import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


const DeleteDialog = ({ open, handleClose, handleDelete, messageId }) => {
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    投稿を削除してよろしいですか？
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => handleDelete(messageId)} color="primary">
                        OK
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DeleteDialog
