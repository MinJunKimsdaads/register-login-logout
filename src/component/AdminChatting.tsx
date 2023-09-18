import styles from '../style/AdminChatting.module.scss';

function AdminChatting(){
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
    return(
        <div className={styles.adminChatting}>
            <div className={styles.titleBox}>
                <span className={styles.title}>JUST RIGHT</span>
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