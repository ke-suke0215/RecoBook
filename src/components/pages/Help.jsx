//////////////////////////
/////ヘルプページ////////
//////////////////////////

import React from 'react'
import RecoHeader from '../organisms/RecoHeader'
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