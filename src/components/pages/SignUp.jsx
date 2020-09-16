import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { useForm } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from '../../materialui/theme'
import RecoInput from '../atoms/RecoInput'
import PasswordInput from '../atoms/PasswordInput'
import RecoButton from '../atoms/RecoButton'
import firebase from '../../config/firebase.js'


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

///スタイル設定///
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp({ history }) {
    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();

    ///アカウント作成実行時の挙動（Firebaseへのデータ転送）///
    const onSubmit = data => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(result => {
                result.user.updateProfile({
                    displayName: data.userName
                }).then(() => {
                    console.log("success")
                    history.push("/")
                }).catch(err => {
                    console.log(err)
                    alert('アカウント作成に失敗しました。')
                })
            })
            .catch(err => {
                console.log(err)
                alert('アカウント作成に失敗しました。')
            })
    }

    ////ログイン画面への移動////
    const toLoginSubmit = (e) => {
        e.preventDefault()
        history.push("/login")
    }

    return (
        <MuiThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Typography
                        component="h1"
                        variant="h5"
                        style={{ color: '#5f4339' }}
                    >
                        Create Account
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid
                            container spacing={2}
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <RecoInput
                                    value="userName"
                                    label="User Name"
                                    register={register}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <RecoInput
                                    value="email"
                                    label="Email Address"
                                    register={register}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PasswordInput register={register} />
                            </Grid>
                            <Grid item xs={6} >
                                <RecoButton
                                    className="classes.submit"
                                    text="Create"
                                />
                            </Grid>
                        </Grid>
                    </form>
                    <Grid item>
                        <Button
                            color="primary"
                            onClick={toLoginSubmit}
                        >
                            ログイン画面へ
                    </Button>
                    </Grid>
                </Paper>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container >
        </MuiThemeProvider >
    );
}