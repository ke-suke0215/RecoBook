//////////////////////////
////感想、内容の表示////////
//////////////////////////

import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    block: {
        display: 'block',
        margin: '10px',
        marginTop: '20px'
    },
}));

const PostDetail = ({ detail }) => {
    const classes = useStyles();

    return (
        <>
            <Typography
                color="textPrimary"
                className={classes.block}
                style={{
                    fontSize: '15px',
                    whiteSpace: 'pre-wrap'
                }}
            >
                {detail}
            </Typography>
        </>
    )
}

export default PostDetail