import React from 'react';
import { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { verifyToken, logout } from '../utils/auth';
import { DialogContext } from './Dialog';
import axios from "axios";
import { io } from 'socket.io-client';
import styles from '../style/Chatting.module.scss';


function Chatting(){  
    const navigate = useNavigate();
    const socket = io("http://localhost:3001",{
        rejectUnauthorized: false
    })
    const dialog = useContext(DialogContext);

    const object = {
        title: '',
        des: '로그아웃 하시겠습니까?',
        btn:{
            btn1:{
                name:'확인',
                action:()=>{
                    logout();
                    navigate('/');
                }
            },
            btn2:{
                name:'취소',
                action:()=>{
                    
                }
            }
        }
    }
 ////////////////
    const initialValue = {
        msg:"",
    }
    const [val, setValue] = useState<any>(initialValue);

    const [msgList, setMsgList] = useState<any[]>([]);

    socket.on("receive message",(message)=>{
        console.log(message);
        setMsgList([...msgList,message]);
    })

    const sendMessage = (e:any) => {
        e.preventDefault();
        socket.emit("send message",{
            msg: val.msg,
        })
        setValue(initialValue);
    }

    const onChange = (e:any) => {
        const {value, name:name} = e.target;
        setValue({...val,[name]:value});
    }
////////////////

    

    useEffect(()=>{
        const vaildToken = verifyToken('http://localhost:3001/chatting').then((res)=>{
            if(!res){
                navigate('/');
            }
        });
        console.log('vv')
    },[msgList])
    
    return(
        <div className={styles.chattingWrap}>
            <div className={styles.titleBox}>
                <span className={styles.title}>JUST RIGHT</span>
                <span className={styles.logout} onClick={()=>{dialog.createDialogOption(object)}}>로그아웃</span>
            </div>
            <div className={styles.chattingWindow}>
                {msgList.map((item,index) => (
                    <div key={index} className={styles.chatBox1}>
                        {item.msg}
                    </div>
                ))}
                
            </div>
            <div className={styles.inputBox}>
                <form onSubmit={sendMessage}>
                    <textarea  onChange={onChange} name="msg"></textarea>
                    <div className={styles.btnBox}>
                        <button type="submit" className={styles.btn}>전송</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Chatting;