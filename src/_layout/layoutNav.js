import React, { useCallback, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducer/user";
import Avatar from "../components/home/faker/avatar";

const LayoutNav = ({ children }) => {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.user);

    useEffect(() => {
        if(!info) {
            navigator('/login');
        }
    }, [info, navigator]);

    const onClickLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST
        })
    }, [dispatch]);

    return(
        <>
            <LayoutNavStyled>
                <div className="inner">
                    <div className="logo">
                        <Link to="/"><img src="/images/logo_L.png" alt="logo" /></Link>
                    </div>
                    <MarginDiv className="search">
                        <div><svg aria-label="검색" className="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor"></path><line fill="none" stroke="currentColor" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg></div> 
                        <input type="text" placeholder="검색" /> 
                    </MarginDiv>
                    <ul className="menulist">
                        <li>
                            <Link to="/"><img src="/images/insta_home.png" alt="home icon" /></Link>
                        </li>
                        <li>
                            <Link to="/direct"><img src="/images/insta_send_empty.png" alt="home icon" /></Link>
                        </li>
                        <li>
                            <button><img src="/images/insta_plus_empty.png" alt="home icon" /></button>
                        </li>
                        <li>
                            <Link to="/explore"><img src="/images/insta_find_empty.png" alt="home icon" /></Link>
                        </li>
                        <li>
                            <button><img src="/images/insta_heart_empty.png" alt="home icon" /></button>
                        </li>
                        <li>
                            <button onClick={onClickLogout}><Avatar /></button>
                        </li>
                    </ul>
                </div>            
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