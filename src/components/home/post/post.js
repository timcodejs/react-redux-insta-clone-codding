import React from "react";
import styled from "styled-components";

const Post = () => {
    return(
        <Poststyled>
            Post
        </Poststyled>
    )
}

export default Post;

const Poststyled = styled.div`
    position: relative;
    z-index: 1;
    width: 614px;
    height: 2000px;
    margin-right: 28px;
    left: 50%;
    transform: translateX(-76%);
    border: 1px solid #000;
    box-sizing: border-box;
`;