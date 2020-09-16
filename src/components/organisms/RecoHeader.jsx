import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import RecoDrawer from '../moleculse/RecoDrawer'
import DialogIcon from './DialogIcon'
import Grid from '@material-ui/core/Grid'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const PostHeader = (props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    ////Drawer開閉設定////
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
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
                            PostPage
                        </Typography>
                    </Grid>
                    <DialogIcon />
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
