import React from 'react'
import TextField from '@material-ui/core/TextField';

const RecoInput = ({ name, label }) => {
    return (
        <>
            <TextField
                autoComplete={name}
                name={name}
                variant="outlined"
                required
                fullWidth
                id={name}
                label={label}
                autoFocus
            />
        </>
    )
}

export default RecoInput
