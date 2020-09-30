//////////////////////////
/////投稿欄を開くボタン//////
//////////////////////////

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import AddPost from '../molecules/AddPost'
import Tooltip from '@material-ui/core/Tooltip'

export default function DialogIcon() {

    ///ダイアログ開閉////
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip
                title="New Post"
            >
                <IconButton
                    color="inherit"
                    onClick={handleClickOpen}
                >
                    <PostAddOutlinedIcon />
                </IconButton>
            </Tooltip>
            <AddPost
                open={open}
                handleClose={handleClose}
            />
        </div>
    );
}