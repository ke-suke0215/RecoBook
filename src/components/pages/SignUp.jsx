import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from '../../materialui/theme'
import RecoInput from '../atoms/RecoInput'
import RecoButton from '../atoms/RecoButton'


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
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>  {/* 追加 */}

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
                    <form className={classes.form} noValidate>
                        <Grid
                            container spacing={2}
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <RecoInput
                                    name="userName"
                                    label="User Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <RecoInput
                                    name="email"
                                    label="Email Address"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <RecoInput
                                    name="Password"
                                    label="Password"
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <RecoButton
                                    className="classes.submit"
                                    text="Create"
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container >
        </MuiThemeProvider >

    );
}