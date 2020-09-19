import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import DrawerList from './DrawerList'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

////スタイル指定////
const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const RecoDrawer = (props) => {
    const { window } = props;
    const classes = useStyles();

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <CssBaseline />
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={props.anchor}
                        open={props.mobileOpen}
                        onClose={props.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        <DrawerList />
                    </Drawer>
                </Hidden>
                {/* <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <DrawerList />
                    </Drawer>
                </Hidden> */}
            </nav>
        </>
    )
}

export default RecoDrawer
