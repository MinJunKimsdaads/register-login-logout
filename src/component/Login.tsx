import styles from '../style/Login.module.scss';
function Login(){
    return(
        <div className={styles.loginWrap}>
            <div className={styles.titleBox}>
                <span className={styles.title}>JUST RIGHT</span>
            </div>
            <div className={styles.inputBox}>
                <div className={styles.inputTitle}>아이디:</div>
                <input name='ID'></input>
            </div>
            <div className={styles.inputBox}>
                <div className={styles.inputTitle}>패스워드:</div>
                <input name='password'></input>
            </div>
            <div className={styles.btnBox}>
                <span className={styles.btn1}>로그인</span>
            </div>
            <div className={styles.btnBox}>
                <span className={styles.btn2}>회원가입</span>
            </div>
        </div>
    )
}

export default Login;