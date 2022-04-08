import React from 'react';
import { Link } from 'react-router-dom';

const LoginMain = () => {
    return(
        <>
            <div><button><img src="/images/logo_L.png" alt="logo" /></button></div>
            <div>계정이 없으신가요? <Link to="/register">가입하기</Link></div>
        </>
    )
}

export default LoginMain;