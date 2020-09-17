import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const InputReview = ({ review, setReview }) => {
    return (
        <>
            <Grid container xs={12} alignItems='center' direction="row">
                <Grid item xs={3}>
                    <Typography
                        component="legend"
                        style={{ color: '#5f4339' }}
                    >
                        Review ：
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Rating
                        name="customized-empty"
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        value={review}
                        onChange={e => {
                            setReview(e.target.value);
                        }}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default InputReview
