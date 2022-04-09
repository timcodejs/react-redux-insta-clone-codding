import React, { useCallback, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducer/user";

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
        <LayoutNavStyled>
            <div>
            <Link to="/"><button className="logo"><img src="/images/logo_L.png" alt="logo" /></button></Link>
            <button onClick={onClickLogout}>로그아웃</button>
            </div>            
            <div>{children}</div>
        </LayoutNavStyled>
    )
}

export default LayoutNav;

const LayoutNavStyled = styled.div`
    max-width: 975px;
    margin: 0 auto;
    & .logo img {
        height: 29px;
    }
`;