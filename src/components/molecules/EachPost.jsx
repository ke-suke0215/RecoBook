//////////////////////////
///////1つ１つの投稿////////
//////////////////////////

import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import PostUserName from '../atoms/PostUserName'
import PostOverview from '../atoms/PostOverview'
import PostDetail from '../atoms/PostDetail';
import OutputReview from '../atoms/OutputReview'


const useStyles = makeStyles((theme) => ({
    paper: {
        width: '100%',
        maxWidth: '50ch',
        margin: 'auto',
        padding: '30px',
        marginBottom: '20px'
    }
}));

const EachPost = ({ message }) => {
    const classes = useStyles();

    return (
        <>
            {/* <ListItem alignItems="flex-start" ml={4}> */}
            <Paper className={classes.paper}>
                <PostUserName user={message.user} />
                <PostOverview label='Title' content={message.title} />
                <PostOverview label='Author' content={message.author} />
                <PostOverview label='Type' content={message.type} />
                <PostDetail detail={message.detail} />
                <OutputReview review={message.review} />
            </Paper>
            {/* </ListItem> */}
        </>
    )
}

export default EachPost
