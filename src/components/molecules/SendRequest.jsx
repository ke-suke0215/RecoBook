////////////////////////////
////お問い合わせ投稿フォーム///
///////////////////////////

import React, { useContext } from 'react'
import { AuthContext } from '../../AuthService'
import CssBaseline from '@material-ui/core/CssBaseline';
import { useForm } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RecoInput from '../atoms/RecoInput'
import RecoButton from '../atoms/RecoButton'
import { db } from '../../config/firebase'
import SendDoneDialog from '../atoms/SendDoneDialog'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        color: '#5f4339',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 0),

    },
}));


const SendRequest = () => {
    const classes = useStyles();

    /////送信完了ダイアログ開閉管理/////
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const user = useContext(AuthContext)

    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        // data.value = value
        db.collection('requests').add({
            ...data,
            email: user.email,
        })
        e.target.reset()
        handleClickOpen()
    }

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Typography
                        component="h1"
                        variant="h5"
                        className={classes.text}
                    >
                        Form
                    </Typography>
                    <form
                        className={classes.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid
                            container spacing={2}
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <RecoInput
                                    value="name"
                                    label="お名前"
                                    register={register}
                                    row={1}
                                    multiline={false}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <RecoInput
                                    value="content"
                                    label="お問い合わせ内容"
                                    register={register}
                                    row={5}
                                    multiline={true}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <RecoButton
                                    className={classes.submit}
                                    text="Send"
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
                <SendDoneDialog open={open} setOpen={setOpen} />
            </Container >
        </>
    )
}

export default SendRequest
