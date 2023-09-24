import axios from "axios";
import { useState, useEffect } from "react";
import styles from '../style/Register.module.scss';

function Register(){
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

    const [valMsg, setValMsg] = useState({
        code:'',
        flag:false,
    });

    //아이디 유효성
    const validationInfoID = (id:string) => {
        const emp = /\s/g;
        const regID = /^[a-z0-9]{6,19}$/g;
        
        if(emp.test(id)){
            setValMsg({code:msgCode.code2,flag:false});
        }else{
            setValMsg({code:'',flag:true});
        }

        // if(!regExp.test(id)){
        //     setValMsg({...valMsg,code:msgCode.code1,flag:false});
        //     // alert(valMsg.code);
        // }else{
        //     setValMsg({...valMsg,code:'',flag:true});
        // }
    }

    // const validationInfoPassword = (password:string, passwordConfirm:string) => {
    //     const regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    //     if(!regExp.test(password)){
    //         setValMsg("비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.");
    //         return false;
    //        }else{
    //         if(password == passwordConfirm){
    //             setValMsg("비밀번호 확인과 서로 다릅니다.");
    //             return false;
    //         }else{
    //             return true;
    //         }
    //         setValMsg("");
    //         return true;
    //        }
    // }
    
    const onChangeHandler = (e:any) => {
        const {value, name:name} = e.target;
        setInfo({...info,[name]:value});
    }

    const onSubmitHandler = () => {
        validationInfoID(info.ID);

        const emp = /\s/g;
        const regID = /^[a-z0-9]{6,19}$/g;
        
        if(valMsg.flag){
            // axios.post('http://localhost:3001/register/',info);
            alert('success');
        }
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