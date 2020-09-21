//////////////////////////
//Tabのtextコンポーネント////
//////////////////////////

import React from 'react'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const TabParts = ({ value, handleChange }) => {
    const tabPartsArray = ["All", "Novel", "Business", "Hobby", "Comic", "Others"]

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
            {
                tabPartsArray.map((part, index) => {
                    return (
                        <Tab label={part} {...a11yProps(index)} />
                    )
                })
            }
        </Tabs>
    )
}

export default TabParts
