import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PostInput from '../atoms/PostInput'
import TypeSelect from '../atoms/TypeSelect'
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';
import { db } from '../../config/firebase'
import { AuthContext } from '../../AuthService';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '500px'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
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

    const selecterLabel = "ジャンルを選択"
    const bookTypes = ["小説", "ビジネス", "趣味", "漫画", "その他"]

    const user = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title === "" || author === "" || detail === "" || type === "" || review === "") {
            alert('空欄があります。')
            return
        }
        console.log("aaaa")

        db.collection('messages').add({
            title: title,
            author: author,
            detail: detail,
            type: type,
            review: review,
            user: user.displayName,
            createdAt: new Date(),
        })
        setTitle('')
        setAuthor('')
        setDetail('')
        setType('')
        setReview('')
        handleClose()
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
                                    setValue={setTitle}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PostInput
                                    name={author}
                                    type="text"
                                    label="著者"
                                    setValue={setAuthor}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PostInput
                                    name={detail}
                                    type="text"
                                    label="内容・感想"
                                    setValue={setDetail}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TypeSelect
                                    bookTypes={bookTypes}
                                    selecterLabel={selecterLabel}
                                    type={type}
                                    setType={setType}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container xs={12} alignItems='center' direction="row">
                                    <Grid item xs={1.5}>
                                        <Typography
                                            component="legend"
                                            style={{ color: '#5f4339' }}
                                        >
                                            Review：
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Rating
                                            name="customized-empty"
                                            precision={0.5}
                                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                            value={review}
                                            onChange={e => {
                                                setReview(e.target.value);
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Share
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default BookPostDialog
