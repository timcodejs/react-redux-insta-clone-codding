import React from 'react';
import { Link } from 'react-router-dom';

const RegisterMain = () => {
    return(
        <>
            <div><button><img src="/images/logo_L.png" alt="logo" /></button></div>
            <div>계정이 있으신가요? <Link to="/login">로그인</Link></div>
        </>
    )
}

export default RegisterMain;