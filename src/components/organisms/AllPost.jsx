import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { makeStyles } from '@material-ui/core/styles';
import EachPost from '../molecules/EachPost'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const mess = {
    user: "ke",
    author: "aaa",
    detail: "deta",
    review: 3,
    type: "ビジネス",
    title: "dd"
}

const AllPost = () => {
    const [messages, setMessages] = useState('')
    const classes = useStyles();

    useEffect(() => {
        db.collection('messages')
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                setMessages(messages)
            })
    }, [])
    return (
        <>
            {
                messages &&
                messages.map(message => {
                    return (
                        <EachPost message={message} key={message.title} />
                    )
                })
            }
        </>
    )
}

export default AllPost
