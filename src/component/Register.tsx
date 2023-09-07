import { useState } from "react";

function Register(){
    const initialInfo = {
        ID:'',
        password:'',
        passwordConfirm:'',
    }
    
    const [info, setInfo] = useState(initialInfo);
    
    const onChangeHandler = (e:any) => {
        const {value, name:name} = e.target;
        setInfo({...info,[name]:value});
    }

    const onSubmitHandler = (e:any) => {
        console.log(info);
    }
    
    
    return(
        <div>
            <div>
                <div>아이디:</div>
                <input name='ID' value={info.ID} onChange={onChangeHandler}></input>
            </div>
            <div>
                <div>패스워드:</div>
                <input name='password' value={info.password} onChange={onChangeHandler}></input>
            </div>
            <div>
                <div>패스워드 확인:</div>
                <input name='passwordConfirm' value={info.passwordConfirm} onChange={onChangeHandler}></input>
            </div>
            <div>
                <span onClick={onSubmitHandler}>가입</span>
            </div>
        </div>
    )
}

export default Register;