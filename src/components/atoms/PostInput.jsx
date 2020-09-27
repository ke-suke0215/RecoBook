//////////////////////////
////投稿入力欄パーツ////////
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

export default function PostInput({
    name,
    type,
    label,
    row,
    multiline,
    setValue
}) {
    const classes = useStyles();

    return (
        <div>
            <TextField
                boo
                variant="outlined"
                fullWidth
                required
                type={type}
                id={name}
                label={label}
                name={name}
                autoComplete={name}
                autoFocus
                value={name}
                multiline={multiline}
                rows={row}
                onChange={e => {
                    setValue(e.target.value)
                }}
                inputProps={{
                    input: classes.resize,
                    className: classes.resize,
                }}
            />
        </div>
    )
}
