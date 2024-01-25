import React from 'react';
import { useEffect } from "react";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyToken, logout } from '../utils/auth';
import { DialogContext } from './Dialog';
import axios from "axios";
import styles from '../style/Chatting.module.scss';


function Chatting(){  
    const navigate = useNavigate();
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
                <textarea></textarea>
                <div className={styles.btnBox}>
                    <span className={styles.btn}>전송</span>
                </div>
            </div>
        </div>
    )
}

export default Chatting;