//////////////////////////
//////ジャンル選択タブ///////
//////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import TabParts from '../atoms/TabParts'
import AllPost from '../organisms/AllPost'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default function TypeSelectTab({
    messagesTypes,
    xsTop,
    smTop,
    xsMarginTop,
    smMarginTop,
    deleteIconDisplay,
}) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.secondary,
        },
        appBar: {
            position: 'fixed',
            [theme.breakpoints.down('xs')]: {
                top: xsTop,
            },
            [theme.breakpoints.up('sm')]: {
                top: smTop,
            },
        },
        tabPanel: {
            [theme.breakpoints.down('xs')]: {
                marginTop: xsMarginTop
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: smMarginTop
            },
        }
    }));

    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                color="default"
                className={classes.appBar}
            >
                <TabParts
                    value={value}
                    handleChange={handleChange}
                />
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {
                    messagesTypes.map((type, index) => {
                        return (
                            <TabPanel value={value} index={index} className={classes.tabPanel} key={index}>
                                <AllPost
                                    messages={type}
                                    deleteIconDisplay={deleteIconDisplay}
                                />
                            </TabPanel>
                        )
                    })
                }
            </SwipeableViews>
        </div>
    );
}