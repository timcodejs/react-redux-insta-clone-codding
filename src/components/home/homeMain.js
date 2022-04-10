import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Post from "./post/post";
import Info from "./info/info";
import styled from "styled-components";

const HomeMain = () => {
    const navigator = useNavigate();
    const { info } = useSelector((state) => state.user);

    useEffect(() => {
        if(!info) {
            navigator('/login');
        }
    }, [info, navigator]);

    return(
        <HomeMainStyled>
            <Post />
            <Info />
        </HomeMainStyled>
    )
}

export default HomeMain;

const HomeMainStyled = styled.div`
    display: flex;
    padding-top: 90px;
`;