//////////////////////////
/////ヘルプページ////////
//////////////////////////

import React from 'react'
import RecoHeader from '../organisms/RecoHeader'
import MuInfoTab from '../organisms/MyInfoTab'
import HelpAccordion from '../organisms/HelpAccordion'

const Help = () => {
    return (
        <>
            <RecoHeader pageType="Help" />
            <HelpAccordion />
        </>
    )
}

export default Help