import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../style/Register.module.scss';

function Register(){
    const navigate = useNavigate();
    const initialInfo = {
        ID:'',
        password:'',
        passwordConfirm:'',
    }

    const msgCode = {
        code1: '아이디는 영문 소문자와 숫자 6~19자리로 입력해야합니다!',
        code2: '아이디에 공백을 포함할 수 없습니다.',
        code3: '비밀번호에 공백을 포함할 수 없습니다.',
        code4: '비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.',
        code5: '비밀번호가 일치하지 않습니다',
    }

    const [info, setInfo] = useState(initialInfo);

    const onChangeHandler = (e:any) => {
        const {value, name:name} = e.target;
        setInfo({...info,[name]:value});
    }

    const onSubmitHandler = () => {
        const emp = /\s/g;
        const regID = /^[a-z0-9]{6,19}$/g;
        const regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

        if(!regID.test(info.ID)){
            alert(msgCode.code1);
            return false;
        }

        if(emp.test(info.ID)){
            alert(msgCode.code2);
            return false;
        }

        if(!regPassword.test(info.password)){
            alert(msgCode.code4);
            return false;
        }

        if(emp.test(info.password)){
            alert(msgCode.code3);
            return false;
        }

        if(info.password !==  info.passwordConfirm){
            alert(msgCode.code5);
            return false;
        }

       axios.post('https://port-0-register-login-logout-32nq2pc2allvrc81e.sel3.cloudtype.app/register',info)
       .then((res)=>{
            // console.log(res.data);
            if(res.data.code == "01"){
                alert(res.data.msg);
                setInfo({...info,ID:''});
            }

            if(res.data.code == "02"){
                alert(res.data.msg);
                navigate("/");
                
            }
       });
    }
    
    return(
        <div className={styles.registerWrap}>
            <div className={styles.titleBox}>
                <span className={styles.title}>JUST RIGHT</span>
            </div>
            <div className={styles.inputBox}>
                <div className={styles.inputTitle}>ID:</div>
                <input name='ID' value={info.ID} onChange={onChangeHandler}></input>
            </div>
            <div className={styles.inputBox}>
                <div className={styles.inputTitle}>Password:</div>
                <input type='password' name='password' value={info.password} onChange={onChangeHandler}></input>
            </div>
            <div className={styles.inputBox}>
                <div className={styles.inputTitle}>Confirm Password:</div>
                <input type='password' name='passwordConfirm' value={info.passwordConfirm} onChange={onChangeHandler}></input>
            </div>
            <div className={styles.btnBox}>
                <span className={styles.btn} onClick={onSubmitHandler}>회원가입</span>
            </div>
        </div>
    )
}

export default Register;