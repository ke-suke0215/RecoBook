//////////////////////////
/////ヘルプページ////////
//////////////////////////

import React from 'react'
import RecoHeader from '../organisms/RecoHeader'
import MoveTopButton from '../atoms/MoveTopButton'

const MyPage = ({ history }) => {
    return (
        <>
            <RecoHeader pageType="My Page" />
            <MoveTopButton />

        </>
    )
}

export default MyPage