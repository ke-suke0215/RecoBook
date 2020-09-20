//////////////////////////
///////絞り込みの投稿///////
//////////////////////////

import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import EachPost from '../molecules/EachPost'

const FilterPost = ({ type }) => {
    const [messages, setMessages] = useState('')

    useEffect(() => {
        db.collection('messages')
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                setMessages(messages.filter(message => message.type === type))
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

export default FilterPost
