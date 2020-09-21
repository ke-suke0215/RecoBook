//////////////////////////
///////投稿入力ページ///////
//////////////////////////

import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostInput from '../atoms/PostInput'
import TypeSelect from '../atoms/TypeSelect'
import { db } from '../../config/firebase'
import { AuthContext } from '../../AuthService';
import InputReview from '../atoms/InputReview'
import RecoButton from '../atoms/RecoButton'

////スタイル指定////
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '500px'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const BookPostDialog = ({ open, handleClose }) => {
    const classes = useStyles();

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [detail, setDetail] = useState('')
    const [type, setType] = useState('')
    const [review, setReview] = useState('')

    const user = useContext(AuthContext)


    ////キャンセルボタンの関数////
    const handleCloseDialog = () => {
        setTitle('')
        setAuthor('')
        setDetail('')
        setType('')
        setReview('')
        handleClose()
    }

    ////投稿追加時の関数////
    const handleSubmit = (e) => {
        e.preventDefault()

        if (title === "" || author === "" || detail === "" || type === "" || review === "") {
            alert('空欄があります。')
            return
        }

        ////記入欄のリセット////
        handleCloseDialog()

        ////Firebaseへのデータ追加////
        setTimeout(() =>
            db.collection('messages').add({
                title: title,
                author: author,
                detail: detail,
                type: type,
                review: review,
                user: user.displayName,
                createdAt: new Date(),
            }), 800
        )
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth={'xs'}
                fullWidth={true}
            >
                <Grid container justify="center">
                    <DialogTitle
                        id="form-dialog-title"
                        style={{ color: '#5f4339' }}
                    >
                        New Post
                    </DialogTitle>
                </Grid>
                <DialogContent>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <Grid
                            container
                            justify='center'
                            alignItems='center'
                            spacing={2}
                        >
                            <Grid item xs={12}>
                                <PostInput
                                    name={title}
                                    type="text"
                                    label="タイトル"
                                    row={1}
                                    multiline="false"
                                    setValue={setTitle}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PostInput
                                    name={author}
                                    type="text"
                                    label="著者"
                                    multiline="false"
                                    row={1}
                                    setValue={setAuthor}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PostInput
                                    name={detail}
                                    type="text"
                                    label="内容・感想"
                                    multiline="true"
                                    row={4}
                                    setValue={setDetail}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TypeSelect
                                    type={type}
                                    setType={setType}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputReview
                                    review={review}
                                    setReview={setReview}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={6}>
                                <RecoButton
                                    text="Share"
                                    className={classes.submit}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default BookPostDialog
