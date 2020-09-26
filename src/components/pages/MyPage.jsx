//////////////////////////
/////ヘルプページ////////
//////////////////////////

import React, { useEffect, useState, useContext } from 'react'
import { db } from '../../config/firebase'
import { AuthContext } from '../../AuthService'
import RecoHeader from '../organisms/RecoHeader'
import MoveTopButton from '../atoms/MoveTopButton'
import MyInfoTab from '../organisms/MyInfoTab'
import TypeSelectTab from '../organisms/TypeSelectTab'
import ChangeNameIcon from '../molecules/ChangeNameIcon'

const MyPage = () => {
    const [allMessages, setAllMessages] = useState('')
    const [novelMessages, setNovelMessages] = useState('')
    const [businessMessages, setBusinessMessages] = useState('')
    const [hobbyMessages, setHobbyMessages] = useState('')
    const [comicMessages, setComicMessages] = useState('')
    const [othersMessages, setOthersMessages] = useState('')

    const user = useContext(AuthContext)

    let userId = ""
    let displayName = ""

    if (user !== null) {
        userId = user.uid
        displayName = user.displayName
    }

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
                    return { ...doc.data(), id: doc.id }
                })
                setAllMessages(messages.filter(message => message.userId === userId))
                setMessagesTypes.map(type => {
                    type.setMessages(messages.filter(message => message.type === type.typeText && message.userId === userId))
                })
            })
    }, [])

    // /////投稿のユーザー名書き換え//////
    // useEffect(() => {
    //     db.collection('messages')
    //         .doc(allMessages[0].id).set({
    //             user: user.displayName
    //         }).then(() => {
    //             console.log("success change user name")
    //         }).catch(err => {
    //             console.log(err)
    //         })
    // }, [])



    const postNum = allMessages.length

    return (
        <>
            <RecoHeader pageType="My Page" />
            <MyInfoTab
                displayName={displayName}
                postNum={postNum}
            />
            <TypeSelectTab
                messagesTypes={messagesTypes}
                xsTop="144px"
                smTop="152px"
                xsMarginTop="192px"
                smMarginTop="197px"
                deleteIconDisplay={true}
            />
            <ChangeNameIcon />
            <MoveTopButton />

        </>
    )
}

export default MyPage