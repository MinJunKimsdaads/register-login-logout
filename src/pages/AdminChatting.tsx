import React from 'react';
import { useEffect } from "react";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyToken, logout } from '../utils/auth';
import { DialogContext } from '../component/Dialog';
import styles from '../style/AdminChatting.module.scss';

function AdminChatting(){
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

    const test = [
        {
            date: '2023-09-18',
            id:'김민준',
            des:'sadsadsadsadsadada',
        },
        {
            date: '2023-09-18',
            id:'김민준',
            des:'sadsadsadsadsadada',
        },
        {
            date: '2023-09-18',
            id:'김민준',
            des:'sadsadsadsadsadada',
        },
        {
            date: '2023-09-18',
            id:'김민준',
            des:'sadsadsadsadsadada',
        },
        {
            date: '2023-09-18',
            id:'김민준',
            des:'sadsadsadsadsadada',
        },
        {
            date: '2023-09-18',
            id:'김민준',
            des:'sadsadsadsadsadada',
        },
    ]

    useEffect(()=>{
        const vaildToken = verifyToken('http://localhost:3001/chatting').then((res)=>{
            if(!res){
                navigate('/');
            }
        });
    })

    return(
        <div className={styles.adminChatting}>
            <div className={styles.titleBox}>
                <span className={styles.title}>JUST RIGHT</span>
                <span className={styles.logout} onClick={()=>{dialog.createDialogOption(object)}}>로그아웃</span>
            </div>
            <div className={styles.userChattingWrap}>
            {
                test.map(((e,index)=>{
                    return( 
                        <div className={styles.userChattingBox} key={index}>
                            <div className={styles.userDate}>{e.date}</div>
                            <div className={styles.userID}>{e.id}</div>
                            <div className={styles.userDes}>{e.des}</div>
                        </div>
                    );
                }))
            }
            </div>
        </div>
    )
}

export default AdminChatting;