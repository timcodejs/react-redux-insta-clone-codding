import React from "react";
import styled from "styled-components";

const LayoutBootom = ({ children }) => {
    return(
        <LayoutStyled>
            <LayoutBottomStyled>
                <div className="login-img"><img src="/images/login_move.gif" alt="소개 이미지" /></div>
                <div>
                    <div>{children}</div>
                    <div className="apptext">앱을 다운로드하세요.</div>
                    <div className="downloadBtn">
                        <button><img src="/images/ios_download.png" alt="ios download btn" /></button>
                        <button><img src="/images/google_download.png" alt="google download btn" /></button>
                    </div>
                </div>
            </LayoutBottomStyled>
            <MetaStyled>
                <ul className="metalist">
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
                    <li>댄스</li>
                    <li>식음료</li>
                    <li>집 및 정원</li>
                    <li>음악</li>
                    <li>시각 예술</li>
                </ul>
                <ul className="infolist">
                    <li>한국어</li>
                    <li>© 2022 Instagram from Meta</li>
                </ul>
            </MetaStyled>
        </LayoutStyled>
    )
}

export default LayoutBootom;

const LayoutStyled = styled.div`
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(251, 250, 250);
`;

const LayoutBottomStyled = styled.div`
    margin: 0 auto;
    width: 350px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    & .login-img img {
        width: 380px;
        margin-right: 32px;
    }
    & .apptext {
        font-weight: 400;
        line-height: 18px;
        font-size: 14px;
        padding: 10px 20px;
    }
    & .downloadBtn {
        margin: 10px 0;
    }
    & .downloadBtn button {
        padding: 0;
        margin: 0 4px;
    }
    & .downloadBtn img {
        height: 40px;
    }
`;

const MetaStyled = styled.div`
    margin: 24px 0 52px 0;
    padding: 0;
    & ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
    }
    & ul li {
        color: rgb(142, 142, 142);
        font-size: 12px;
        font-weight: 400;
    }
    & .metalist {
        flex: 1 1 1 30%;
    }
    & .metalist li {
        margin: 0 8px 12px 8px;
    }
    & .infolist {
        margin: 12px 0;
    }
    & .infolist li:nth-child(2) {
        margin-left: 16px;
    }
`;