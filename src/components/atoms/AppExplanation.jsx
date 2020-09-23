/////////////////////////
///アプリ概要本文//////////
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
    sectionWrap: {
        marginBottom: "40px",
    },
    sentence: {
        marginLeft: '30px',
    }
}));

const AppExplanation = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainWrap}>
            <div className={classes.sectionWrap}>
                <p>このアプリケーションは</p>
                <ul>
                    <li>オススメの本の共有</li>
                    <li>自身のアウトプット</li>
                </ul>
                <p>を行う場です。</p>
            </div>
            <div className={classes.sectionWrap}>
                <p>オススメの本の共有</p>
                <p className={classes.sentence}>
                    皆さんが普段の読書で得た情報をここに投稿することにより、多くの知識や本の説明が集約され知見を広めることが出来ます。
                    「読書はしたいけど何を読んでいいかわからない。」、「周りの人達が何を読んでいるのか知りたい。」、「普段とは異なるジ
                    ャンルの本を読んでみたい。」このような考えを持っている人にも新たな本との出会いを果たしてほしいです。
                </p>
            </div>
            <div>
                <p>自身のアウトプット</p>
                <p className={classes.sentence}>
                    「本から情報やノウハウを得ただけの頭でっかち」になっていませんか？知識は使わないと意味がありませんしすぐに忘れてしまいます。
                    まずは読み取ったことを自分なりにまとめてみましょう。思考し他人に伝えることはアウトプットの第一歩です。
                    この場に投稿することで自身の知識定着に役立てていただければ幸いです。
                </p>
            </div>

        </div>
    )
}

export default AppExplanation
