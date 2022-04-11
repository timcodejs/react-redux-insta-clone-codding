import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Avatar from "../faker/avatar";
import Name from "../faker/name";
import Word from "../faker/word";

const Info = () => {
    const dummyNumber = [1, 2, 3, 4, 5];
    const { info } = useSelector((state) => state.user);

    return(
        <InfoStyled>
            <div className="user-info">
                <div className="user-meta">
                    <span className="user-avatar">
                        {info && (<img src={info.avatar} alt="" />)}
                    </span>
                    <div>
                        {info && (<h4>{info.nickname}</h4>)}
                        <p><Word /></p>
                    </div>
                </div>
                <div><button className="blue-color">전환</button></div>
            </div>
            <div className="friend">
                <div>
                    <span className="recommend">회원님을 위한 추천</span>
                    <button>모두 보기</button>
                </div>
                <ul>
                    {dummyNumber.map((v) => (
                        <li key={v}>
                            <div className="user-meta">
                                <span className="friend-avatar"><Avatar /></span>
                                <div>
                                    <h4><Name /></h4>
                                    <p><Word /></p>
                                </div>
                            </div>
                            <div><button className="blue-color">팔로우</button></div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="meta">
                <ul>
                    <li>소개</li>
                    <li>도움말</li>
                    <li>홍보 센터</li>
                    <li>API</li>
                    <li>채용 정보</li>
                    <li>개인정보처리방침</li>
                    <li>약관</li>
                    <li>위치</li>
                    <li>인기 계정</li>
                    <li>해시태그</li>
                    <li>언어</li>
                </ul>
                <div>© 2022 INSTAGRAM FROM META</div>
            </div>
        </InfoStyled>
    )
}

export default Info;

const InfoStyled = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(60%);
    width: 293px;
    & ul, h4, p {
        padding: 0;
        margin: 0;
    }
    & .user-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 18px 0 10px 0;
    } 
    & .user-info p {
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        color: rgba(var(--f52,142,142,142),1);
    }
    & .user-meta {
        display: flex;
        align-items: center;
    }
    & .user-avatar {
        width: 56px;
    }
    & .user-avatar img {
        width: 100%;
        border-radius: 50%;
    }
    & .friend-avatar {
        width: 32px;
    }
    & .user-meta div {
        margin-left: 12px;
    }
    & .friend {
        margin-bottom: 12px;
    }
    & .friend > div {
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
        padding: 4px 0;
    }
    & .friend > div button {
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: rgba(var(--i1d,38,38,38),1);
        vertical-align: middle;
    }
    & .friend p {
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
        color: rgba(var(--f52,142,142,142),1);
    }
    & .recommend {
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: rgba(var(--f52,142,142,142),1);
    }
    & .friend ul {
        padding: 8px 0;
    }
    & .friend ul li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
    }
    & .blue-color {
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: rgba(var(--d69,0,149,246),1);
    }
    & .meta ul li,
    & .meta div {
        color: rgba(var(--edc,199,199,199),1);
        font-size: 12px;
        font-weight: 400;
        float: left;
    }
    & .meta ul li::after {
        content: '·';
        padding: 0 3px;
    }
    & .meta div {
        margin-top: 16px;
    }
`;