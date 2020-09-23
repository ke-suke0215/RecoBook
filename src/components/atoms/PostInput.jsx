//////////////////////////
////投稿入力欄パーツ////////
//////////////////////////

import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function PostInput({
    name,
    type,
    label,
    row,
    multiline,
    setValue
}) {
    return (
        <div>
            <TextField
                boo
                variant="outlined"
                fullWidth
                required
                variant="outlined"
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
            />
        </div>
    )
}
