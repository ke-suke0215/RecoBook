///////////////////////////////
//投稿欄のtitle,author,type表示欄/
///////////////////////////////

import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import OverviewContent from '../atoms/OverviewContent'

const useStyles = makeStyles((theme) => ({
    block: {
        display: 'block',
        marginBottom: '10px'
    },
    box: {
        display: 'flex'
    }
}));

const PostOverview = ({ label, content }) => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.box}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.block}
                    color="textPrimary"
                >
                    {label}：
                </Typography>
                <OverviewContent content={content} />
            </Box>
        </>
    )
}

export default PostOverview
