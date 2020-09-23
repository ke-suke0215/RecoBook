/////////////////////////
///お問い合わせ欄文章//////////
/////////////////////////

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

///スタイル設定///
const useStyles = makeStyles((theme) => ({
    mainWrap: {
        width: '90%',
        margin: 'auto',
        fontFamily: 'serif'
    },
}));

const RequestText = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainWrap}>
            <p>
                不具合やご要望がありましたら、下記のフォームよりお気軽にお申し付けください。
            </p>
        </div>
    )
}

export default RequestText
