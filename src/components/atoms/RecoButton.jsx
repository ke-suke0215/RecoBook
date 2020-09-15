import React from 'react'
import Button from '@material-ui/core/Button'

const RecoButton = ({ className, text }) => {
    return (
        <>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={className}
            >
                {text}
            </Button>
        </>
    )
}

export default RecoButton
