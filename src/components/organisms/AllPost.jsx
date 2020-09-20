//////////////////////////
///////全ての投稿////////
//////////////////////////

import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import EachPost from '../molecules/EachPost'

const AllPost = () => {
    const [messages, setMessages] = useState('')

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
