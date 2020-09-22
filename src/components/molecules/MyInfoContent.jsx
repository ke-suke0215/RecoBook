import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import OverviewContent from '../atoms/OverviewContent'
import { AuthContext } from '../../AuthService'

const useStyles = makeStyles((theme) => ({
    block: {
        display: 'block',
    },
    box: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const MyInfoContent = ({ label, content }) => {
    const classes = useStyles();
    const user = useContext(AuthContext)


    console.log(user)
    // console.log(user.displayName)

    return (
        <>
            <Box className={classes.box}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.block}
                    color="textPrimary"
                >
                    {label}：
                </Typography>
                <OverviewContent content={content} />
            </Box>
        </>
    )
}

export default MyInfoContent
