import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    block: {
        display: 'block',
    },
}));

const PostDetail = ({ detail }) => {
    const classes = useStyles();

    return (
        <>
            <Typography
                color="textPrimary"
                className={classes.block}
            >
                {detail}
            </Typography>
        </>
    )
}

export default PostDetail
