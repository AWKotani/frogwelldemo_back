import liff from '@line/liff';
import React, {getUserInfo, useEffect} from 'react';
import ReactDOM from 'react-dom';
import confgData from './.env';

function LiffPage() {

    useEffect(()=>{
        initLiff()// 初期化処理
    }, [])

    /**
     * LIFFの初期化を行う
     * 初期化完了. 以降はLIFF SDKの各種機能を利用できる
     *  =>初期化前でも使用できる機能もある（liff.isInClient()など）
     */
    const initLiff = () => {
        liff.init({ liffId: confgData.LIFF_ID})
            .then(()=>{ 
                //ログインしていなければログインさせる
                if(liff.isLoggedIn() === false) liff.login({})
            }).catch( (error)=> {});
    }

    /**
     * LINEで保持しているユーザー情報取得
     */
    const getUserInfo = () => {
        liff.getProfile().then(profile => {
            alert( JSON.stringify(profile) );
        }).catch((error)=>{})
    }

    return (
        <>
            {/* LIFF内以外からアクセス */}
            {liff.isInClient() === false ?
                <p>ブラウザからはお使いいただけません。LINE内アプリ（LIFF）からご利用ください。</p>
            :
                <p>こんにちは</p>
            }
        </>
    );
}
export default LiffPage;

if (document.getElementById('LiffContent')) {
    ReactDOM.render(
        document.getElementById('MachineContent')
    );
}