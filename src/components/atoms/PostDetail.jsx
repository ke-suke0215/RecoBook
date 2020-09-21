//////////////////////////
////感想、内容の表示////////
//////////////////////////

import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    block: {
        display: 'block',
        margin: '20px',
        marginRight: '0px',
        fontFamily: 'sans-serif',
        whiteSpace: 'pre-wrap',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '15px',
        },
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