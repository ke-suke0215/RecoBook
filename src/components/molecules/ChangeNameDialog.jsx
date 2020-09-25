////////////////////////
//ユーザー名変更ダイアログ//
////////////////////////

import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from "react-hook-form"
import Grid from '@material-ui/core/Grid'
import firebase from '../../config/firebase'
import RecoInput from '../atoms/RecoInput'
import RecoButton from '../atoms/RecoButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
import { db } from '../../config/firebase'


////スタイル指定////
const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    gridItem: {
        margin: 'auto',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const ChangeNameDialog = ({ open, handleClose }) => {
    const classes = useStyles();

    const history = useHistory()


    //////react-hook-form導入//////
    const { register, handleSubmit, watch, errors } = useForm();

    /////submit時の関数/////
    const onSubmit = (data, e) => {
        firebase.auth().currentUser.updateProfile({
            displayName: data.userName
        }).then(() => {
            console.log("success")
            firebase.auth().signOut()
            history.push("/login")
            console.log("Logout")
        }).catch(err => {
            console.log(err)
            alert('変更できませんでした')
        })
        // e.target.reset()
        // handleClose()
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
                        Change User Name
                    </DialogTitle>
                </Grid>
                <DialogContent>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid
                            container
                            justify='center'
                            alignItems='center'
                            spacing={2}
                        >
                            <Grid item xs={12}>
                                <RecoInput
                                    value="userName"
                                    label="New User Name"
                                    register={register}
                                    row={1}
                                    multiline={false}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={6}
                            className={classes.gridItem}
                        >
                            <RecoButton
                                text="Save"
                                className={classes.submit}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                style={{
                                    color: '#555',
                                    fontSize: '13px'
                                }}
                            >
                                ※変更すると一度ログアウトされます。
                            </Typography>
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

export default ChangeNameDialog