import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import firebase from '../../config/firebase'
import DrawerItem from '../atoms/DrawerItem'

const DrawerList = () => {
    const postSubmit = e => {
        e.preventDefault()
        console.log("post")
    }
    const myPageSubmit = e => {
        e.preventDefault()
        console.log("my page")
    }
    const helpSubmit = e => {
        e.preventDefault()
        console.log("help")
    }
    const logoutSubmit = e => {
        e.preventDefault()
        // firebase.auth().signOut()
        console.log("Logout")
    }

    return (
        <>
            <List>
                <DrawerItem
                    icon={<HomeRoundedIcon />}
                    text="Post"
                    onSubmit={postSubmit}
                />
                <DrawerItem
                    icon={<AccountCircleRoundedIcon />}
                    text="My Page"
                    onSubmit={myPageSubmit}
                />
                <DrawerItem
                    icon={<HelpOutlineRoundedIcon />}
                    text="Help"
                    onSubmit={helpSubmit}
                />
                <DrawerItem
                    icon={<ExitToAppRoundedIcon />}
                    text="Logout"
                    onSubmit={logoutSubmit}
                />
            </List>
        </>
    )
}

export default DrawerList
