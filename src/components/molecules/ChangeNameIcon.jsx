///////////////////////////////
///ユーザー名変更用settingIcon///
//////////////////////////////

import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
import ChangeNameDialog from './ChangeNameDialog';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    setting: {
        position: 'fixed',
        bottom: '22px',
        left: '22px',
    }
}));

const ChangeNameIcon = () => {
    const classes = useStyles();

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
                    <SettingsIcon
                        fontSize="large"
                    />
                </IconButton>
            </Tooltip>
            <ChangeNameDialog
                open={open}
                handleClose={handleClose}
            />
        </>
    )
}

export default ChangeNameIcon