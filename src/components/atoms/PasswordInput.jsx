//////////////////////////
////パスワード入力欄////////
//////////////////////////

import React from 'react'
import TextField from '@material-ui/core/TextField';

const RecoInput = ({ register }) => {
    return (
        <>
            <TextField
                autoComplete="current-password"
                name="password"
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password(6文字以上)"
                autoFocus
                type="password"
                inputProps={{
                    ref: register
                }}
            />
        </>
    )
}

export default RecoInput
