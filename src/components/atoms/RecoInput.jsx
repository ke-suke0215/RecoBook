//////////////////////////
///text入力コンポーネント////
//////////////////////////

import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    resize: {
        fontFamily: 'sans-serif',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '14px',
        },
    },
}))

const RecoInput = ({ value, label, register, row, multiline, }) => {
    const classes = useStyles();

    return (
        <>
            <TextField
                autoComplete={value}
                name={value}
                variant="outlined"
                required
                fullWidth
                id={value}
                label={label}
                autoFocus
                inputProps={{
                    ref: register,
                    input: classes.resize,
                    className: classes.resize,
                }}
                rows={row}
                multiline={multiline}
            />
        </>
    )
}

export default RecoInput
