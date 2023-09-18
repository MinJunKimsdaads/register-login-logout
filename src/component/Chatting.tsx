import styles from '../style/Chatting.module.scss';
function Chatting(){  
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