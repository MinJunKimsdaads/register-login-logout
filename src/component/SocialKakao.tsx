import axios from "axios";

const SocialKakao = () => {
    // const kakaoClientId = 'dad04c9126b8ae322e868f369047458e';
    // const kakaoOnSuccess = async (data:any) => {
    //     const idToken = data.response.access_token // 엑세스 토큰 백엔드로 전달

    //     console.log(data);

    //     const loginInfo = {
    //         platform:'kakao',
    //         ID:idToken,
    //     }

    //     axios.post('http://localhost:3001/login',loginInfo).then((result)=>{
    //         // console.log(result);
    //         // localStorage.setItem('jwtToken', result.data);
    //     });
    // }

    // const kakaoOnFailure = (err:any) => {
    //     console.log(err);
    // }

    const Rest_api_key = '80579b21bf87d4f9cdcb3bf6780f0bdb'; //REST API KEY
    const redirect_uri = 'http://localhost:3000' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

    const handleLogin = async()=>{
        window.location.href = kakaoURL

        // const endpointUrl = 'https://kapi.kakao.com/v1/user/unlink';
        // const accessToken = 'D8PhdWN_l3w3DNIU7kXGQdXXJruLQ2YCwtqgSjmSSkcpwb8PjbstUG04DuAKPXRpAAABjXhadQfE017PSiBv1Q'; // 여기에 실제 액세스 토큰을 입력합니다.

        // const headers = {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     'Authorization': `Bearer ${accessToken}`
        // };
      
        // // Axios를 사용하여 POST 요청을 보냅니다.
        // const response = await axios.post(endpointUrl, {}, { headers });
    }

    return(
        // <>
        //     <KakaoLogin token={kakaoClientId} onSuccess={kakaoOnSuccess} onFail={kakaoOnFailure}></KakaoLogin>
        // </>
        <>
            <button onClick={handleLogin}>카카오 로그인</button>
        </>

    )
}

export default SocialKakao;