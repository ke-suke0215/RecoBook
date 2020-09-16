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
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';
import { db } from '../../config/firebase'
import RecoInput from '../atoms/RecoInput'
import { AuthContext } from '../../AuthServuce'


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


const AddPost = ({ open, handleClose }) => {
    const classes = useStyles();

    const selecterLabel = "ジャンルを選択"
    const bookTypes = ["小説", "ビジネス", "趣味", "漫画", "その他"]

    const user = useContext(AuthContext)

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     if (title === "" || author === "" || detail === "" || type === "" || review === "") {
    //         alert('空欄があります。')
    //         return
    //     }

    //     db.collection('messages').add({
    //         title: title,
    //         author: author,
    //         detail: detail,
    //         type: type,
    //         review: review,
    //         user: user.displayName,
    //         createdAt: new Date(),
    //     })
    //     setTitle('')
    //     setAuthor('')
    //     setDetail('')
    //     setType('')
    //     setReview('')

    //     handleClose()
    // }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth={'xs'}
                fullWidth={true}
            >
                <DialogTitle
                    id="form-dialog-title"
                    style={{ color: '#5f4339' }}
                >
                    <Grid container justify="center">
                        New Post
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <form
                        className={classes.form}
                        noValidate
                    // onSubmit={handleSubmit}
                    >
                        <Grid
                            container
                            spacing={2}
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <RecoInput
                                    value="aa"
                                    label="ラベル"
                                // register={register}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <RecoInput
                                    value="aa"
                                    label="ラベル"
                                // register={register}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <RecoInput
                                    value="aa"
                                    label="ラベル"
                                // register={register}
                                />
                            </Grid>
                            <Grid
                                content
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item style={{ marginTop: '10px' }}>
                                    <Typography
                                        component="legend"
                                        style={{ textAlign: "center" }}

                                    >
                                        Review
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Rating
                                        name="customized-empty"
                                        precision={0.5}
                                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                    // value={review}
                                    // onChange={e => {
                                    //     setReview(e.target.value);
                                    // }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <BookInput
                            name={title}
                            type="text"
                            label="タイトル"
                            setValue={setTitle}
                            />
                            <BookInput
                            name={author}
                            type="text"
                            label="著者"
                            setValue={setAuthor}
                            />
                            <BookInput
                            name={detail}
                            type="text"
                            label="内容・感想"
                            setValue={setDetail}
                            />
                            <BookSelecter
                            bookTypes={bookTypes}
                            selecterLabel={selecterLabel}
                            type={type}
                            setType={setType}
                        /> */}
                        {/* <Box component="fieldset" mt={2} borderColor="transparent">
                            <Typography component="legend">評価</Typography>
                            <Rating
                            name="customized-empty"
                            precision={0.5}
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            value={review}
                            onChange={e => {
                                setReview(e.target.value);
                            }}
                            />
                        </Box> */}
                        <Grid container justify="center">
                            <Grid item xs={6} >
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

export default AddPost
