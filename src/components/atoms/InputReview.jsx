//////////////////////////
////入力欄のReview////////
//////////////////////////

import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const InputReview = ({ review, setReview }) => {
    return (
        <>
            <Box
                style={{
                    display: 'flex'
                }}
            >
                <Typography
                    component="legend"
                    style={{
                        color: '#5f4339',
                        marginTop: '2px'
                    }}

                >
                    Review：
                </Typography>
                <Rating
                    name="customized-empty"
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    value={review}

                    onChange={e => {
                        setReview(e.target.value);
                    }}
                />
            </Box>
        </>
    )
}

export default InputReview
