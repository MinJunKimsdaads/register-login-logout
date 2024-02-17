import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { verifyToken } from '../utils/auth';
import { Link } from "react-router-dom";
import styles from '../style/Login.module.scss';
import SocialKakao from "../component/SocialKakao";

import KakaoLoading from "../component/KakaoLoading";

function Login(){
    const navigate = useNavigate();

    useEffect(()=>{
        verifyToken('http://localhost:3001/').then((res)=>{
            if(res){
                navigate('/chatting');
            }
        });
    })

    const loginInfo = {
        platform:'web',
        ID:'',
        password:'',
    }

    const [info, setInfo] = useState(loginInfo);

    const onChangeHandler = (e:any) => {
        const {value, name} = e.target;
        setInfo({...info,[name]:value});
    }

    const onSubmitHandler = () => {
        axios.post('http://localhost:3001/login',info).then((result)=>{
            localStorage.setItem('jwtToken', result.data);
        });
    }

    const params = new URL(window.location.href).searchParams.get("code");
    
    return(
        <>
            {params ? 
                <KakaoLoading></KakaoLoading> : 
                <div className={styles.loginWrap}>
                    <div className={styles.titleBox}>
                        <span className={styles.title}>JUST RIGHT</span>
                    </div>
                    <div className={styles.inputTitle}>Login to your account</div>
                    <div className={styles.inputBox}>
                        <input name='ID' placeholder="ID" value={info.ID} onChange={onChangeHandler}></input>
                    </div>
                    <div className={styles.inputBox}>
                        <input name='password' placeholder="Password" type='password' value={info.password} onChange={onChangeHandler}></input>
                    </div>
                    <div className={styles.btnBox}>
                        <span className={styles.btn1} onClick={onSubmitHandler}>Sign in</span>
                    </div>
                    <div className={styles.socialLoginBox}>
                        <div>- Or sign in with - </div>
                        <div>
                            <SocialKakao></SocialKakao>
                        </div>
                    </div>
                    <div className={styles.registerBox}>
                        <span>Don't hava an account?</span>
                        <Link to={`/register`} className={styles.btn2}>Sign up</Link>
                    </div>
                </div>
            }
        </>
        // <div className={styles.loginWrap}>
        //     <div className={styles.titleBox}>
        //         <span className={styles.title}>JUST RIGHT</span>
        //     </div>
        //     <div className={styles.inputBox}>
        //         <div className={styles.inputTitle}>아이디:</div>
        //         <input name='ID' value={info.ID} onChange={onChangeHandler}></input>
        //     </div>
        //     <div className={styles.inputBox}>
        //         <div className={styles.inputTitle}>패스워드:</div>
        //         <input name='password' type='password' value={info.password} onChange={onChangeHandler}></input>
        //     </div>
        //     <div className={styles.btnBox}>
        //         <span className={styles.btn1} onClick={onSubmitHandler}>로그인</span>
        //     </div>
        //     <div>
        //         <SocialKakao></SocialKakao>
        //     </div>
        //     <div className={styles.btnBox}>
        //         <Link to={`/register`} className={styles.btn2}>회원가입</Link>
        //     </div>
        // </div>
    )
}

export default Login;