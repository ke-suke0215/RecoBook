//////////////////////////
//////ヘッダー////////////
//////////////////////////

import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import RecoDrawer from '../molecules/RecoDrawer'
import DialogIcon from './DialogIcon'
import Grid from '@material-ui/core/Grid'

////スタイル指定////
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        position: 'fixed'
    }
}));

const PostHeader = ({ text }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    ////投稿ボタンの表示の真偽値////
    let dialogIconDisplay = false
    if (text === "Post Page") {
        dialogIconDisplay = true
    }

    ////Drawer開閉設定////
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container
                        justify="center"
                    >
                        <Typography variant="h6" noWrap>
                            {text}
                        </Typography>
                    </Grid>
                    <DialogIcon dialogIconDisplay={dialogIconDisplay} />
                </Toolbar>
            </AppBar>
            <RecoDrawer
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
        </div>
    )
}

export default PostHeader
