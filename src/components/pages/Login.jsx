//////////////////////////
/////ログインページ/////////
//////////////////////////

import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../AuthService'
import CssBaseline from '@material-ui/core/CssBaseline';
import { useForm } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RecoInput from '../atoms/RecoInput'
import PasswordInput from '../atoms/PasswordInput'
import RecoButton from '../atoms/RecoButton'
import firebase from '../../config/firebase.js'
import Button from '@material-ui/core/Button';

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
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login({ history }) {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();

    ////ログインボタン実行時の挙動////
    const onSubmit = data => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(() => {
                history.push("/")
                console.log('success')
            })
            .catch(err => {
                console.log(err)
                alert('メールアドレスまたはパスワードが間違っています。')
            })
    }
    ////アカウント作成画面への移動////
    ////アカウント作成画面への移動////
    const toSignUpSubmit = (e) => {
        e.preventDefault()
        history.push("/signup")
    }

    const user = useContext(AuthContext)

    ////ログイン済みの場合////
    if (user) {
        return <Redirect to="/" />
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper className={classes.paper}>
                <Typography
                    component="h1"
                    variant="h5"
                    style={{ color: '#5f4339' }}
                >
                    Login
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
                                value="email"
                                label="Email Address"
                                register={register}
                                row={1}
                                multiline={false}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <PasswordInput register={register} />
                        </Grid>
                        <Grid item xs={6} >
                            <RecoButton
                                className={classes.submit}
                                text="Login"
                            />
                        </Grid>
                    </Grid>
                </form>
                <Grid item>
                    <Button
                        color="primary"
                        onClick={toSignUpSubmit}
                    >
                        まだアカウントをお持ちでない場合
                    </Button>
                </Grid>
            </Paper>
        </Container >
    );
}