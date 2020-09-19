//////////////////////////
//////ユーザー名表示///////
//////////////////////////

import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    block: {
        display: 'block',
        marginBottom: '10px'

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
                style={{ fontSize: '20px' }}
            >
                {user}
            </Typography>
        </>
    )
}

export default PostUserName
