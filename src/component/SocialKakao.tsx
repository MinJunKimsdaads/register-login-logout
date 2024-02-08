import axios from "axios";

const SocialKakao = () => {
    const Rest_api_key = '80579b21bf87d4f9cdcb3bf6780f0bdb'; //REST API KEY
    const redirect_uri = 'http://localhost:3000' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

    const handleLogin = async()=>{
        window.location.href = kakaoURL
    }

    return(
        <>
            <button onClick={handleLogin}>카카오 로그인</button>
        </>

    )
}

export default SocialKakao;