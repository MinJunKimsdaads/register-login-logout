import axios from "axios";

//JWT 토큰 검증
export const verifyToken = async (url:string) => {
    const verifyToken = localStorage.getItem('jwtToken');
    const currentTimestampInSeconds = Math.floor(Date.now() / 1000); //UNIX
    if(!verifyToken){
        return false;
    }else{
        try{
            return await axios.post(url,{token:`${verifyToken}`}).then((result)=>{
                if(currentTimestampInSeconds > result.data.exp){
                    localStorage.removeItem('jwtTokenId');
                    localStorage.removeItem('jwtToken');
                    return false;
                }else{
                    localStorage.setItem('jwtTokenId', result.data.id); //채팅으로 같이 보낼 id 획득
                    return true;
                }
            }); 
        }catch(e){
            return false;
        }
    }
}

//로그아웃
export const logout = () => {
    localStorage.removeItem('jwtToken');
}