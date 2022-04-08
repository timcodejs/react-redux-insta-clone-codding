import React from "react";
import styled from "styled-components";

const LayoutBootom = ({ children }) => {
    return(
        <>
            <div>{children}</div>
            <div>앱을 다운로드하세요.</div>
            <div>
                <button><img src="/images/ios_download.png" alt="ios download btn" /></button>
                <button><img src="/images/google_download.png" alt="google download btn" /></button>
            </div>
            <MetaStyled>
                <ul>
                    <li>Meta</li>
                    <li>소개</li>
                    <li>블로그</li>
                    <li>채용 정보</li>
                    <li>도움말</li>
                    <li>API</li>
                    <li>개인정보처리방침</li>
                    <li>약관</li>
                    <li>인기 계정</li>
                    <li>해시태그</li>
                    <li>위치</li>
                    <li>Instagram Lite</li>
                </ul>
                <ul>
                    <li>한국어</li>
                    <li>© 2022 Instagram from Meta</li>
                </ul>
            </MetaStyled>
        </>
    )
}

export default LayoutBootom;

const MetaStyled = styled.ul`
    & ul {
        display: flex;
    }
    & ul li {
        color: rgb(142, 142, 142);
        font-size: 12px;
        font-weight: 400;
    }
`;