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
    title: {
        color: '#5f4339',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const AddPost = ({ open, handleClose }) => {
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
                userId: user.uid,
                createdAt: new Date(),
            }), 300
        )
    }
    ////投稿画面インプット表示用配列////
    const labelNames = [
        {
            name: title,
            label: "タイトル",
            row: 1,
            multiline: false,
            setValue: setTitle,
        },
        {
            name: author,
            label: "著者",
            row: 1,
            multiline: false,
            setValue: setAuthor,
        },
        {
            name: detail,
            label: "内容・感想",
            row: 4,
            multiline: true,
            setValue: setDetail,
        },
    ]

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
                        className={classes.title}
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
                            {
                                labelNames.map(labelName => {
                                    return (
                                        <Grid item xs={12} key={labelName.label}>
                                            <PostInput
                                                name={labelName.name}
                                                type="text"
                                                label={labelName.label}
                                                multiline={labelName.multiline}
                                                row={labelName.row}
                                                setValue={labelName.setValue}
                                            />
                                        </Grid>
                                    )
                                })
                            }
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

export default AddPost
