import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../AuthService'
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { useForm } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RecoInput from '../atoms/RecoInput'
import PasswordInput from '../atoms/PasswordInput'
import RecoButton from '../atoms/RecoButton'
import firebase from '../../config/firebase.js'
import Button from '@material-ui/core/Button';
import { db } from '../../config/firebase'


const useStyles = makeStyles((theme) => ({

}));

const SendRequest = () => {
    const classes = useStyles();

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        // data.value = value
        console.log(data)
        db.collection('messages').add({
            ...data,
            createdAt: new Date()
        })
    }

    return (
        <>
            <Paper>
                <Typography
                    component="h1"
                    variant="h5"
                    style={{ color: '#5f4339' }}
                >
                    お問い合わせフォーム
                </Typography>
                <form
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
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <RecoInput
                                value="email"
                                label="メールアドレス"
                                register={register}
                            />
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12}>
                            <PostInput
                                value="email"
                                label="メールアドレス"
                                register={register}
                            />
                        </Grid> */}
                    <Grid item xs={6} >
                        <RecoButton
                            className={classes.submit}
                            text="Login"
                        />
                    </Grid>
                </form>
            </Paper>
        </>
    )
}

export default SendRequest
