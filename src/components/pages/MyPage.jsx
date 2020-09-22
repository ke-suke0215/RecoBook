//////////////////////////
/////ヘルプページ////////
//////////////////////////

import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'

import RecoHeader from '../organisms/RecoHeader'
import MoveTopButton from '../atoms/MoveTopButton'
import MyInfoTab from '../organisms/MyInfoTab'
import TypeSelectTab from '../organisms/TypeSelectTab'

const MyPage = () => {

    const [allMessages, setAllMessages] = useState('')
    const [novelMessages, setNovelMessages] = useState('')
    const [businessMessages, setBusinessMessages] = useState('')
    const [hobbyMessages, setHobbyMessages] = useState('')
    const [comicMessages, setComicMessages] = useState('')
    const [othersMessages, setOthersMessages] = useState('')


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
            <RecoHeader pageType="My Page" />
            <MyInfoTab />
            <TypeSelectTab
                messagesTypes={messagesTypes}
                xsTop="144px"
                smTop="108px"
                xsMarginTop="192px"
                smMarginTop="153px"
            />
            <MoveTopButton />

        </>
    )
}

export default MyPage