//////////////////////
/////削除ボタンアイコン//
///////////////////////

import React from 'react'
import { db } from '../../config/firebase.js'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteButton = ({ messageId, deleteIconDisplay }) => {

    ////削除する関数//////
    const handleDelete = (id) => {
        db.collection("messages").doc(id).delete()
            .then(function () {
                console.log("Document successfully deleted!");
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        console.log(db.collection("messages"))
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log(messageId)

    return (
        <div>
            <IconButton
                aria-label="delete"
                onClick={handleClickOpen}
            >
                <DeleteIcon
                    style={{
                        display: deleteIconDisplay ? 'block' : 'none'
                    }}
                />
            </IconButton>
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
        </div >
    )
}

export default DeleteButton