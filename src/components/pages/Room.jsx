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

    ///postpageジャンル別投稿作成用配列////
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

    ////postpageジャンル別投稿///
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
                    return { ...doc.data(), id: doc.id }
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
                xsTop="56px"
                smTop="64px"
                xsMarginTop="100px"
                smMarginTop="108px"
                deleteIconDisplay={false}
            />
            <MoveTopButton />
        </>
    )
}

export default Room
