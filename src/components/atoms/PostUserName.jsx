//////////////////////////
//////ユーザー名表示///////
//////////////////////////

import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    block: {
        fontSize: '20px',
        fontFamily: 'sans-serif',
        lineHeight: '48px',
    },
}));

const PostUserName = ({ user }) => {
    const classes = useStyles();

    return (
        <>
            <Typography
                component="span"
                variant="body2"
                className={classes.block}
                color="textPrimary"
            >
                {user}
            </Typography>
        </>
    )
}

export default PostUserName
