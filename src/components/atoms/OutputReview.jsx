////表示投稿、評価部分////


import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    block: {
        display: 'block',
    },
}));

const OutputReview = ({ review }) => {
    const classes = useStyles();

    return (
        <>
            <Grid container xs={12} alignItems='center' direction="row">
                <Grid item xs={2}>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.block}
                        color="textPrimary"
                    >
                        Review：
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Rating
                        name="read-only"
                        // emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        value={review}
                        precision={0.5}
                        readOnly
                        size="small"
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default OutputReview
