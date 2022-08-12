import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducer/user";
import AddPost from "../components/home/post/addPost";
import { PUBLIC_URL } from "../modules/module";

const LayoutNav = ({ children }) => {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.user);
    const [plusPost, setPlusPost] = useState('none');
    const [popupDisplay, setPopupDisplay] = useState('none');
    
    useEffect(() => {
        if(!info) {
            navigator('/login');
        }
    }, [info, navigator]);

    const onClickPopupList = useCallback(() => {
        if(popupDisplay === 'none') {
            setPopupDisplay('block');
        } else if(popupDisplay === 'block') {
            setPopupDisplay('none');
        }
    }, [popupDisplay]);

    const onClickLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST
        })
    }, [dispatch]);

    const onCLickAddPosthandler = useCallback(() => {
        setPlusPost('block');
    }, []);

    const onClickAddPostExit = useCallback(() => {
        setPlusPost('none');
    }, []);

    return(
        <>
            <LayoutNavStyled>
                <div className="inner">
                    <div className="logo">
                        <Link to="/"><img src={PUBLIC_URL+"/images/logo_L.png"} alt="logo" /></Link>
                    </div>
                    <MarginDiv className="search">
                        <div><svg aria-label="검색" className="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor"></path><line fill="none" stroke="currentColor" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg></div> 
                        <input type="text" placeholder="검색" /> 
                    </MarginDiv>
                    <ul className="menulist">
                        <li>
                            <Link to="/"><img src={PUBLIC_URL+"/images/insta_home.png"} alt="home icon" /></Link>
                        </li>
                        <li>
                            <Link to="/"><img src={PUBLIC_URL+"/images/insta_send_empty.png"} alt="home icon" /></Link>
                        </li>
                        <li>
                            <button onClick={onCLickAddPosthandler}><img src={PUBLIC_URL+"/images/insta_plus_empty.png"} alt="home icon" /></button>
                        </li>
                        <li>
                            <Link to="/"><img src={PUBLIC_URL+"/images/insta_find_empty.png"} alt="home icon" /></Link>
                        </li>
                        <li>
                            <button><img src={PUBLIC_URL+"/images/insta_heart_empty.png"} alt="home icon" /></button>
                        </li>
                        <li>
                            <button className="user-avatar" onClick={onClickPopupList}>
                                {info && (<img src={info.avatar} alt="login user avatarimage" />)}
                            </button>
                            <div className="user-avatar-list" style={{display: popupDisplay}}>
                                <div></div>
                                <ul>
                                    <li>
                                        <button>
                                            <img src={PUBLIC_URL+"/images/profile_icon1.png"} alt="프로필 이미지" /> 프로필
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <img src={PUBLIC_URL+"/images/profile_icon2.png"} alt="저장 이미지" /> 저장됨
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <img src={PUBLIC_URL+"/images/profile_icon3.png"} alt="설정 이미지" /> 설정
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <img src={PUBLIC_URL+"/images/profile_icon4.png"} alt="계정전환 이미지" /> 계정 전환
                                        </button>
                                    </li>
                                    <li>
                                        <button className="logout" onClick={onClickLogout}>
                                            로그아웃
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <AddPost display={plusPost} onClickAddPostExit={onClickAddPostExit} />
            </LayoutNavStyled>
            <div>{children}</div>
        </>
    )
}

export default LayoutNav;

const LayoutNavStyled = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #fff;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    & .inner {
        min-width: 935px;
        height: 60px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & .logo a {
        display: block;
    }
    & .logo img {
        height: 29px;
        padding-top: 10px;
    }
    & .menulist {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .menulist img {
        width: 30px;
        margin: 0 8px;
    }
    & .menulist button {
        padding: 0;
        margin: 0;
    }
    & .user-avatar img {
        width: 24px;
        border-radius: 50%;
    }
    & .user-avatar-list {
        position: absolute;
    top: 54px;
    left: 50%;
    transform: translate(113%, 2%);
    background-color: white;
    border-radius: 6px;
    box-shadow: 2px 2px 8px #d9d9d9;
    font-size: 14px;
    }
    & .user-avatar-list > div {
        position: absolute;
        background: rgba(var(--d87,255,255,255),1);
        border: 1px solid rgba(var(--f23,255,255,255),1);
        box-shadow: -4px -4px 5px rgba(var(--jb7,0,0,0),.0775);
        width: 13px;
        height: 13px;
        transform: rotate(45deg);
        top: -5px;
        right: 37px;
    }
    & .user-avatar-list ul {
        padding: 0;
    }
    & .user-avatar-list li button {
        display: flex;
        align-items: center;
        width: 230px;
        padding: 10px 16px;
    }
    & .user-avatar-list li button img {
        width: 16px;
        margin: 0;
        margin-right: 10px;
    }
    & .logout {
        padding-left: 10px;
        border-top: 1px solid rgba(var(--b6a,219,219,219),1);
    }
`;

const MarginDiv = styled.div`
    margin-left: 180px;
    input {
        width: 220px;
        height: 34px;
        border: 0;
        border-radius: 6px;
        font-size: 16px;
        padding-left: 40px;
        background: rgba(var(--bb2,239,239,239),1);   
    }
    input:focus {
        outline: none;
    }
    & > div:nth-child(1) {
        position: absolute;
        transform: translate( 100%, 45% );
    }
`;