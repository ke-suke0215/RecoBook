//////////////////////////
////Drawer一覧////////////
//////////////////////////

import React from 'react'
import List from '@material-ui/core/List';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import firebase from '../../config/firebase'
import DrawerItem from '../atoms/DrawerItem'
import { useHistory } from 'react-router-dom'

const DrawerList = () => {
    const history = useHistory()

    const postSubmit = e => {
        e.preventDefault()
        console.log("post")
        history.push("/")
    }
    const myPageSubmit = e => {
        e.preventDefault()
        console.log("my page")
        history.push("/mypage")
    }
    const helpSubmit = e => {
        e.preventDefault()
        console.log("help")
        history.push("/help")
    }
    const logoutSubmit = e => {
        e.preventDefault()
        firebase.auth().signOut()
        console.log("Logout")
    }

    ///drawerに表示するもの////
    const drawerContents = [
        {
            icon: <HomeRoundedIcon />,
            text: "Post",
            func: postSubmit
        },
        {
            icon: <AccountCircleRoundedIcon />,
            text: "My Page",
            func: myPageSubmit
        },
        {
            icon: <HelpOutlineRoundedIcon />,
            text: "Help",
            func: helpSubmit
        },
        {
            icon: <ExitToAppRoundedIcon />,
            text: "Logout",
            func: logoutSubmit
        },
    ]

    return (
        <>
            <List>
                {
                    drawerContents.map(content => {
                        return (
                            <DrawerItem
                                icon={content.icon}
                                text={content.text}
                                onSubmit={content.func}
                            />
                        )
                    })
                }
            </List>
        </>
    )
}

export default DrawerList
