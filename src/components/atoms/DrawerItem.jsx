//////////////////////////
////Drawerの部品//////////
//////////////////////////

import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const DrawerItem = ({ icon, text, onSubmit }) => {
    return (
        <>
            <ListItem button onClick={onSubmit}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText>
                    {text}
                </ListItemText>
            </ListItem>
        </>
    )
}

export default DrawerItem
