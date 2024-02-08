import React from 'react';
import { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { verifyToken, logout } from '../utils/auth';
import { DialogContext } from '../component/Dialog';
import { io } from 'socket.io-client';
import styles from '../style/Chatting.module.scss';


function Chatting(){  
    const navigate = useNavigate();
    const socket = io("http://localhost:3001",{
        rejectUnauthorized: false
    })
    const dialog = useContext(DialogContext);

    const object = { //custom alert
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
 /////////////////////웹소켓//////////////////////
    const id = localStorage.getItem('jwtTokenId');
    const today = new Date();

    const initialValue = {
        msg:"",
        id:id,
        date:"",
    }
    const [val, setValue] = useState<any>(initialValue);

    const [msgList, setMsgList] = useState<any[]>([]); //채팅 목록

    const onChange = (e:any) => {
        const {value, name} = e.target;
        setValue({...val,[name]:value});
    }

    const sendMessage = (e:any) => {
        e.preventDefault();
        
        socket.emit("send message",{
            msg: val.msg,
            id:id,
            date:today,
        })
        setValue(initialValue);
    }

    socket.on("receive message",(message)=>{ //서버에서 receive message 받으면 채팅리스트 업데이트
        setMsgList([...msgList,message]);
    })
/////////////////////웹소켓//////////////////////

    useEffect(()=>{
        //JWT 검증
        verifyToken('http://localhost:3001/chatting').then((res)=>{
            if(!res){
                navigate('/');
            }
        });
    },[msgList, navigate])
    
    return(
        <div className={styles.chattingWrap}>
            <div className={styles.titleBox}>
                <span className={styles.title}>JUST RIGHT</span>
                <span className={styles.logout} onClick={()=>{dialog.createDialogOption(object)}}>로그아웃</span>
            </div>
            <div className={styles.chattingWindow}>
                {msgList.map((item,index) => (
                    <div key={index} className={item.id === id ? styles.chatWrap1 : styles.chatWrap2}>
                        <div>{item.date}</div>
                        <div className={item.id === id ? styles.chatBox1 : styles.chatBox2}>
                            {item.msg}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.inputBox}>
                <form onSubmit={sendMessage}>
                    <textarea onChange={onChange} name="msg" value={val.msg}></textarea>
                    <div className={styles.btnBox}>
                        <button type="submit" className={styles.btn}>전송</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Chatting;