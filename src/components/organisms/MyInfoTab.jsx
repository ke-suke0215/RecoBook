import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'

import MyInfoContent from '../molecules/MyInfoContent'
const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'fixed',
        paddingTop: '12px',
        paddingBottom: '12px',
        [theme.breakpoints.down('xs')]: {
            top: '56px',
        },
        [theme.breakpoints.up('sm')]: {
            top: '64px',
        },
    },
    container: {
    },
}));

const MyInfoTab = ({ displayName, postNum }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar
                position="static"
                color="default"
                className={classes.appBar}
            >
                <Grid
                    container
                    className={classes.container}
                    alignItems="center"
                    justify="center"
                    spacing={3}
                >
                    <Grid item xs={12} sm={4} >
                        <MyInfoContent
                            label="User Name"
                            content={displayName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MyInfoContent label="Number of Posts" content={postNum} />
                    </Grid>
                </Grid>
            </AppBar>
        </>
    )
}

export default MyInfoTab