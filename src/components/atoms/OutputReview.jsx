///////////////////////
////表示投稿、評価部分////
///////////////////////

import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

const OutputReview = ({ review }) => {
    return (
        <>
            <Box
                style={{
                    display: 'flex'
                }}
            >
                <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                >
                    Review：
                </Typography>
                <Rating
                    name="read-only"
                    value={review}
                    precision={0.5}
                    readOnly
                    size="small"
                />
            </Box>
        </>
    )
}

export default OutputReview
