///////////////////////////////
//投稿欄のtitle,author,type内容/
///////////////////////////////

import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    block: {
        display: 'block',
        marginBottom: '10px'
    },
}));

const OverviewContent = ({ content }) => {
    const classes = useStyles();

    return (
        <>
            <Typography
                component="span"
                variant="body2"
                className={classes.block}
                color="textPrimary"
                style={{
                    fontFamily: 'sans-serif',
                }}
            >
                {content}
            </Typography>
        </>
    )
}

export default OverviewContent
