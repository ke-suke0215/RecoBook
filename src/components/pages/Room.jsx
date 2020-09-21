//////////////////////////
/////メインページ////////
//////////////////////////

import React from 'react'
import RecoHeader from '../organisms/RecoHeader'
import TypeSelectTab from '../organisms/TypeSelectTab'
import MoveTopButton from '../atoms/MoveTopButton'



const Room = ({ history }) => {
    return (
        <>
            <RecoHeader text="Post Page" />
            <TypeSelectTab />
            <MoveTopButton />
        </>
    )
}

export default Room
