import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles'
import PostUserName from '../atoms/PostUserName'
import PostOverview from './PostOverview'
import PostDetail from '../atoms/PostDetail';
import OutputReview from '../atoms/OutputReview'

const useStyles = makeStyles((theme) => ({
    content: {
        marginLeft: "15px",
    }
}));

const PostContent = ({ message }) => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.content} >
                <PostOverview label='Title' content={message.title} />
                <PostOverview label='Author' content={message.author} />
                <PostOverview label='Type' content={message.type} />
                <PostDetail detail={message.detail} />
                <OutputReview review={message.review} />
            </Box>
        </>
    )
}

export default PostContent
