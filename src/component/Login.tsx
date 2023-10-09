import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../style/Login.module.scss';

function Login(){

    const loginInfo = {
        ID:'',
        password:'',
    }

    const [info, setInfo] = useState(loginInfo);

    const onChangeHandler = (e:any) => {
        const {value, name:name} = e.target;
        setInfo({...info,[name]:value});
    }

    const onSubmitHandler = () => {
        axios.post('http://localhost:3001/login',info,{ withCredentials: true }).then((result)=>{
            console.log(result);
        });
    }
    
    return(
        <div className={styles.loginWrap}>
            <div className={styles.titleBox}>
                <span className={styles.title}>JUST RIGHT</span>
            </div>
            <div className={styles.inputBox}>
                <div className={styles.inputTitle}>아이디:</div>
                <input name='ID' value={info.ID} onChange={onChangeHandler}></input>
            </div>
            <div className={styles.inputBox}>
                <div className={styles.inputTitle}>패스워드:</div>
                <input name='password' type='password' value={info.password} onChange={onChangeHandler}></input>
            </div>
            <div className={styles.btnBox}>
                <span className={styles.btn1} onClick={onSubmitHandler}>로그인</span>
            </div>
            <div className={styles.btnBox}>
                <Link to={`/register`} className={styles.btn2}>회원가입</Link>
            </div>
        </div>
    )
}

export default Login;