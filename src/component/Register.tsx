import axios from "axios";
import { useState } from "react";

function Register(){
    const initialInfo = {
        ID:'',
        password:'',
        passwordConfirm:'',
    }
    
    const [info, setInfo] = useState(initialInfo);

    const validationInfoTotal = (info:any) => {
        ////아이디 정규식
        ////패스워드 8글자 이상
        ////패스워드, 패스워드확인 동일한지 체크
    }

    const validationInfoID = (id:string):boolean => {
        const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;

        return regExp.test(id);
    }

    const validationInfoPassword = (password:string, passwordConfirm:string) => {
        
    }
    
    const onChangeHandler = (e:any) => {
        const {value, name:name} = e.target;
        setInfo({...info,[name]:value});
    }

    const onSubmitHandler = () => {

        const valID = validationInfoID(info.ID);

        console.log(valID);

        
        axios.post('http://localhost:3001/register/',info);
    }
    
    return(
        <div>
            <div>
                <div>아이디:</div>
                <input name='ID' value={info.ID} onChange={onChangeHandler}></input>
            </div>
            <div>
                <div>패스워드:</div>
                <input type='password' name='password' value={info.password} onChange={onChangeHandler}></input>
            </div>
            <div>
                <div>패스워드 확인:</div>
                <input type='password' name='passwordConfirm' value={info.passwordConfirm} onChange={onChangeHandler}></input>
            </div>
            <div>
                <span onClick={onSubmitHandler}>가입</span>
            </div>
        </div>
    )
}

export default Register;