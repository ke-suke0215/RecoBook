import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function PostInput({
    name,
    type,
    label,
    setValue
}) {
    return (
        <div>
            <TextField
                // variant="outlined"
                required
                fullWidth
                variant="outlined"
                type={type}
                id={name}
                label={label}
                name={name}
                autoComplete={name}
                autoFocus
                value={name}
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
        </div>
    )
}
