//////////////////////////
///////投稿一覧////////
//////////////////////////

import React from 'react'
import EachPost from '../molecules/EachPost'

const AllPost = ({ messages }) => {
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
