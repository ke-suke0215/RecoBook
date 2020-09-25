import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
import ChangeNameDialog from './ChangeNameDialog';
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    setting: {
        position: 'fixed',
        bottom: '22px',
        left: '5%',
    }
}));


const ChangeNameIcon = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Tooltip
                title="Change User Name"
                className={classes.setting}
            >
                <IconButton
                    color="primary"
                    onClick={handleClickOpen}
                >
                    <SettingsIcon />
                </IconButton>
            </Tooltip>
            <ChangeNameDialog open={open} handleClose={handleClose} />
        </>
    )
}

export default ChangeNameIcon