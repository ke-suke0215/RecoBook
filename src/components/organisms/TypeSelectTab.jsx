//////////////////////////
//////ジャンル選択タブ///////
//////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabParts from '../atoms/TabParts'
import AllPost from '../organisms/AllPost'
import FilterPost from './FilterPost'

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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.secondary,
    },
    appBar: {
        position: 'fixed',
        [theme.breakpoints.down('xs')]: {
            top: '56px',
        },
        [theme.breakpoints.up('sm')]: {
            top: '64px',
        },
    },
    tabPanel: {
        [theme.breakpoints.down('xs')]: {
            marginTop: '100px'
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: '108px'
        },
    }
}));

export default function TypeSelectTab() {
    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const changeTabArray = ["小説", "ビジネス", "趣味", "漫画", "その他"]

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" className={classes.appBar}>
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
                <TabPanel value={value} index={0} className={classes.tabPanel}>
                    <AllPost />
                </TabPanel>
                {
                    changeTabArray.map((type, index) => {
                        return (
                            <TabPanel value={value} index={index + 1} className={classes.tabPanel}>
                                <FilterPost type={type} />
                            </TabPanel>
                        )
                    })
                }
            </SwipeableViews>
        </div>
    );
}