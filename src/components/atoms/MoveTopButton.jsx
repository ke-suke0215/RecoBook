import React from 'react'
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLessOutlined';
import AppBar from '@material-ui/core/AppBar'

const handleScroll = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const MoveTopButton = () => {
    const style = {
        margin: 0,
        top: 'auto',
        right: 30,
        bottom: 30,
        left: 'auto',
        position: 'fixed',
    }
    return (
        <>
            <Button style={style} color="primary"
                variant="contained"
                startIcon={<ExpandLessIcon />}
                onClick={handleScroll}
            >
                Top
            </Button>
        </>
    )
}

export default MoveTopButton
