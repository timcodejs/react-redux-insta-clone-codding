import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PostForm from "./post/postForm";
import Info from "./info/info";
import styled from "styled-components";

const HomeMain = ({setIsOpen}) => {
    const navigator = useNavigate();
    const { info } = useSelector((state) => state.user);

    useEffect(() => {
        if(!info) {
            navigator('/login');
        }
    }, []);

    return(
        <HomeMainStyled>
            <PostForm setIsOpen={setIsOpen} />
            <Info />
        </HomeMainStyled>
    )
}

export default HomeMain;

const HomeMainStyled = styled.div`
    display: flex;
    padding-top: 90px;
    background-color: rgba(var(--b3f,250,250,250),1);
`;