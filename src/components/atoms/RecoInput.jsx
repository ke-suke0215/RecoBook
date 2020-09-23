//////////////////////////
///text入力コンポーネント////
//////////////////////////

import React from 'react'
import TextField from '@material-ui/core/TextField';

const RecoInput = ({ value, label, register, row, multiline, }) => {
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
                    ref: register
                }}
                row={row}
                multiline={multiline}
            />
        </>
    )
}

export default RecoInput
