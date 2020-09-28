////////////////////////
////Helpページ内容///////
///////////////////////

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import AppExplanation from '../atoms/AppExplanation'
import HowToUse from '../atoms/HowToUse'
import RequestContent from '../molecules/RequestContent';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            marginTop: '56px',
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: '64px',
        },
    },
}));

const Accordion = withStyles({
    root: {
        border: '1px solid #ddd',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: '#d7ccc8',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        paddingLeft: '50px',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '0px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    },
}))(MuiAccordionDetails);


export default function CustomizedAccordions() {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    ////アコーディオン表示内容配列/////
    const accordionTypes = [
        {
            panelNum: "panel1",
            tabText: "アプリの概要",
            contentText: <AppExplanation />,
            ariaControls: "panel1d-content",
            id: "panel1d-header",
        },
        {
            panelNum: "panel2",
            tabText: "使用方法",
            contentText: <HowToUse />,
            ariaControls: "panel2d-content",
            id: "panel2d-header",
        },
        {
            panelNum: "panel3",
            tabText: "お問い合わせ",
            contentText: <RequestContent />,
            ariaControls: "panel3d-content",
            id: "panel3d-header",
        },
    ]

    return (
        <div className={classes.root}>
            {
                accordionTypes.map(type => {
                    return (
                        <Accordion
                            square expanded={expanded === type.panelNum}
                            onChange={handleChange(type.panelNum)}
                            key={type.panelNum}
                        >
                            <AccordionSummary
                                aria-controls={type.ariaControls}
                                id={type.id}
                            >
                                <Typography>{type.tabText}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {type.contentText}
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    );
}