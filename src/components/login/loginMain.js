import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginMain = () => {
    return(
        <>  
            <div>
                <div><button><img src="/images/logo_L.png" alt="logo" /></button></div>
                <form>
                    <input 
                    type="text" 
                    placeholder="전화번호, 사용자 이름 또는 이메일" />
                    <input 
                    type="password" 
                    placeholder="비밀번호" />
                    <BlueBtn type="submit">로그인</BlueBtn>
                </form>
                <div>또는</div>
                <div><FacebookBtn>Facebook으로 로그인</FacebookBtn></div>
                <div>비밀번호를 잊으셨나요?</div>
            </div>
            <div>계정이 없으신가요? <Link to="/register"><SpanColor>가입하기</SpanColor></Link></div>
        </>
    )
}

export default LoginMain;

const BlueBtn = styled.button`
    background-color: rgba(0, 149, 246, 0.3);
    color: rgb(255, 255, 255);
    font-weight: 600;
    width: 268px;
    height: 30px;
    padding: 5px 9px;
    line-height: 18px;
    font-size: 14px;
    border-radius: 4px;
`;

const FacebookBtn = styled.button`
    color: #385185;
    font-weight: 600;
    font-size: 14px;
`;

const SpanColor = styled.span`
    color: rgb(0, 149, 246);
    font-weight: 600;
    font-size: 14px;
`;