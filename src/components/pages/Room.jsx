//////////////////////////
/////メインページ////////
//////////////////////////

import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import RecoHeader from '../organisms/RecoHeader'
import TypeSelectTab from '../organisms/TypeSelectTab'
import MoveTopButton from '../atoms/MoveTopButton'

const Room = () => {

    const [allMessages, setAllMessages] = useState('')
    const [novelMessages, setNovelMessages] = useState('')
    const [businessMessages, setBusinessMessages] = useState('')
    const [hobbyMessages, setHobbyMessages] = useState('')
    const [comicMessages, setComicMessages] = useState('')
    const [othersMessages, setOthersMessages] = useState('')

    // const changeTabArray = ["小説", "ビジネス", "趣味", "漫画", "その他"]

    const setMessagesTypes = [
        {
            setMessages: setNovelMessages,
            typeText: "小説",
        },
        {
            setMessages: setBusinessMessages,
            typeText: "ビジネス",
        },
        {
            setMessages: setHobbyMessages,
            typeText: "趣味",
        },
        {
            setMessages: setComicMessages,
            typeText: "漫画",
        },
        {
            setMessages: setOthersMessages,
            typeText: "その他",
        },
    ]

    const messagesTypes = [
        allMessages,
        novelMessages,
        businessMessages,
        hobbyMessages,
        comicMessages,
        othersMessages,
    ]

    useEffect(() => {
        db.collection('messages')
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                setAllMessages(messages)
                setMessagesTypes.map(type => {
                    type.setMessages(messages.filter(message => message.type === type.typeText))
                })
            })
    }, [])


    return (
        <>
            <RecoHeader pageType="Post Page" />
            <TypeSelectTab
                messagesTypes={messagesTypes}
            />
            <MoveTopButton />
        </>
    )
}

export default Room
