import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: 'auto',
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
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const accordionTypes = [
        {
            panelNum: "panel1",
            tabText: "アプリの概要",
            contentText: "11111",
        },
        {
            panelNum: "panel2",
            tabText: "使用方法",
            contentText: "2222223",
        },
        {
            panelNum: "panel3",
            tabText: "お問い合わせ",
            contentText: "3333333",
        },
    ]

    return (
        <div className={classes.root}>
            {/* {
                accordionTypes.map(accordionType => {
                    return(
                        <Accordion square expanded={expanded === panelNum} onChange={handleChange(panelNum)}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>アプリの概要</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    １つめ
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            } */}
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>アプリの概要</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        １つめ
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>使用方法</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        2つめ
                        2つめ
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>お問い合わせ</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        fdn
                        fdsa
                        fdsa
                        fd
                        ds
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}