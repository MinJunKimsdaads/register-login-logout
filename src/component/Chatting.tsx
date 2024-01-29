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
        
    })
    socket.on("receive message",(message)=>{
        console.log('eeee');
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

    

    useEffect(()=>{
        const vaildToken = verifyToken('http://localhost:3001/chatting').then((res)=>{
            if(!res){
                navigate('/');
            }
        });
    })

    const sendMessage = (e:any) => {
        e.preventDefault();
        socket.emit("send message",{
            msg: 'test',
        })
    }
    
    return(
        <div className={styles.chattingWrap}>
            <div className={styles.titleBox}>
                <span className={styles.title}>JUST RIGHT</span>
                <span className={styles.logout} onClick={()=>{dialog.createDialogOption(object)}}>로그아웃</span>
            </div>
            <div className={styles.chattingWindow}>
                <div className={styles.chatBox1}>
                    내용1dsadsa
                </div>
                <div className={styles.chatBox2}>
                    내용2
                </div>
                <div className={styles.chatBox2}>
                    내용2
                </div>
                <div className={styles.chatBox2}>
                    내용2
                </div>
                <div className={styles.chatBox2}>
                    내용2
                </div>
                <div className={styles.chatBox1}>
                    내용1
                </div>
                <div className={styles.chatBox2}>
                    내용2
                </div>
                <div className={styles.chatBox1}>
                    내용1
                </div>
                <div className={styles.chatBox2}>
                    내용2
                </div>
            </div>
            <div className={styles.inputBox}>
                <form>
                    <textarea></textarea>
                    <div className={styles.btnBox}>
                        <button type="submit" className={styles.btn}>전송</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Chatting;