import React from "react";
import styled from "styled-components";
import Avatar from "../common/avatar";

const Info = () => {
    return(
        <InfoStyled>
            <div className="user-info">
                <div><Avatar /></div>
                <div>
                    <h4>user-nickname</h4>
                    <p>comment</p>
                </div>
                <div><button>전환</button></div>
            </div>
            <div className="friend">
                <div>
                    <span>회원님을 위한 추천</span>
                    <button>모두 보기</button>
                </div>
                <ul>
                    <li>
                        <div><Avatar /></div>
                        <div>
                            <h4>user-nickname</h4>
                            <p>comment</p>
                        </div>
                        <div><button>팔로우</button></div>
                    </li>
                </ul>
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
    }
    & .friend ul li {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;