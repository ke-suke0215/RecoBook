/////////////////////////
//help使用方法欄本文///////
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
    section: {
        marginBottom: "40px",
    },
    content: {
        marginLeft: '30px',
        marginBottom: '30px'
    },
    sentence: {
        marginLeft: '10px',

    }
}));

const HowToUse = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainWrap}>
            <div className={classes.section}>
                <p>ページ説明</p>
                <div className={classes.content}>
                    <p>Post Page</p>
                    <p className={classes.sentence}>
                        皆さんの投稿が集約されている場です。
                        (絞り込みに関しては下部に記載)
                    </p>
                </div>
                <div className={classes.content}>
                    <p>My Page</p>
                    <p className={classes.sentence}>
                        自身の投稿、ユーザー名、投稿数を閲覧できる場です。<br />
                        また投稿の削除やユーザー名の変更をすることができます。
                    </p>
                </div>
                <div className={classes.content}>
                    <p>Help</p>
                    <p className={classes.sentence}>
                        このアプリケーションの使用方法などを確認することができます。
                    </p>
                </div>
            </div>
            <div>
                <p>機能説明</p>
                <div className={classes.content}>
                    <p>投稿方法</p>
                    <p className={classes.sentence}>
                        ①「Post Page」もしくは「My Page」の右上にあるアイコンをクリックまたはタップ<br />
                        ②投稿入力画面が表示されたらそれぞれの項目に記入(全て必須項目)<br />
                        ③「Share」ボタンをクリックまたはタップ
                    </p>
                </div>
                <div className={classes.content}>
                    <p>投稿の絞り込み</p>
                    <p className={classes.sentence}>
                        投稿欄上部のタブを使用することで投稿のジャンルを絞り込むことができます。<br />
                        左から「All、Novel、Business、Hobby、Comic、Others」とあり
                        、それぞれ「全て、小説、ビジネス、趣味、漫画、その他」を表しています。
                        クリックまたはタップすることでそのジャンルを表示します。
                    </p>
                </div>
                <div className={classes.content}>
                    <p>サイドバー</p>
                    <p className={classes.sentence}>
                        左上のアイコンをクリックまたはタップするとサイドバーが表示されます。これを用いてページの変更を行うことができます。
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HowToUse
