//////////////////////
/////削除ボタンアイコン//
///////////////////////

import React from 'react'
import { db } from '../../config/firebase.js'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteDialog from '../atoms/DeleteDialog'

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

    // console.log(messageId)

    return (
        <>
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
            <DeleteDialog
                open={open}
                handleClose={handleClose}
                handleDelete={handleDelete}
                messageId={messageId}
            />
        </ >
    )
}

export default DeleteButton