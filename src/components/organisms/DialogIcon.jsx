import React from 'react';
import Button from '@material-ui/core/Button';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import AddPost from '../moleculse/AddPost'

export default function DialogIcon() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="inherit" onClick={handleClickOpen}>
                <PostAddOutlinedIcon />
            </Button>
            <AddPost
                open={open}
                handleClose={handleClose}
            />
        </div>
    );
}