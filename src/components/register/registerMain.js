import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegisterMain = () => {
    return(
        <>
            <div>
                <div><button><img src="/images/logo_L.png" alt="logo" /></button></div>
                <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>
                <div><FacebookBtn>Facebook으로 로그인</FacebookBtn></div>
                <div>또는</div>
                <form>
                    <input 
                    type="text" 
                    placeholder="휴대폰 번호 또는 이메일 주소" />
                    <input
                    type="text"
                    placeholder="성명" />
                    <input
                    type="text"
                    placeholder="사용자 이름" />
                    <input 
                    type="password" 
                    placeholder="비밀번호" />
                    <BlueBtn type="submit">가입</BlueBtn>
                </form>
                <div>가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</div>
            </div>
            <div>계정이 있으신가요? <Link to="/login"><SpanColor>로그인</SpanColor></Link></div>
        </>
    )
}

export default RegisterMain;

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