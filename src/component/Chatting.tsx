import React from 'react';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { verifyToken } from '../utils/auth';
import axios from "axios";
import styles from '../style/Chatting.module.scss';


function Chatting(){  
    const navigate = useNavigate();
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