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
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Novel" {...a11yProps(1)} />
            <Tab label="Business" {...a11yProps(2)} />
            <Tab label="Hobby" {...a11yProps(3)} />
            <Tab label="Comic" {...a11yProps(4)} />
            <Tab label="Others" {...a11yProps(5)} />

            {/* {
                tabPartsArray.map = ((parts, index) => {
                    return (
                        <Tab label={parts} {...a11yProps(index)} />
                    )
                })
            } */}
        </Tabs>
    )
}

export default TabParts
