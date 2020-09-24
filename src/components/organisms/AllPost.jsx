//////////////////////////
///////投稿一覧////////
//////////////////////////

import React from 'react'
import EachPost from '../molecules/EachPost'

const AllPost = ({ messages, deleteIconDisplay }) => {
    return (
        <>
            {
                messages &&
                messages.map(message => {
                    return (
                        <EachPost
                            message={message}
                            key={message.title}
                            deleteIconDisplay={deleteIconDisplay}
                        />
                    )
                })
            }
        </>
    )
}

export default AllPost
