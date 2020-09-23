//////////////////////////
///////1つ１つの投稿////////
//////////////////////////

import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import PostUserName from '../atoms/PostUserName'
import PostContent from './PostContent'
import DeleteButton from './DeleteButton'

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '100%',
        maxWidth: '50ch',
        margin: 'auto',
        padding: '30px',
        paddingTop: '20px',
        marginBottom: '20px'
    },
    wrap: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        borderBottom: '1px solid #777',
        // padding: '0'
    },
}));

const EachPost = ({ message }) => {

    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper}>
                <div className={classes.wrap}>
                    <PostUserName user={message.user} />
                    <DeleteButton messageId={message.id} />
                </div>
                <PostContent message={message} />
            </Paper>
        </>
    )
}

export default EachPost
