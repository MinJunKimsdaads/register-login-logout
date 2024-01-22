import React from 'react';
import { useEffect } from "react";
import axios from "axios";
import styles from '../style/Chatting.module.scss';
function Chatting(){  
    useEffect(()=>{
        const verifyToken = async () => {
            const verifyToken = localStorage.getItem('jwtToken');

            if(!verifyToken){
                console.log('vvv');
            }else{
                try{
                    await axios.post('http://localhost:3001/chatting',verifyToken).then((result)=>{
                        console.log(result);
                    }); 
                }catch(e){
                    console.log(e);
                }
            }
        }

        verifyToken();
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