import React from "react";
import styled from "styled-components";
import Story from "./story";
import Post from "./post";

const PostForm = () => {
    return(
        <PostFormstyled>
            <Story />
            <Post />
        </PostFormstyled>
    )
}

export default PostForm;

const PostFormstyled = styled.div`
    position: relative;
    z-index: 1;
    width: 614px;
    margin-right: 28px;
    left: 50%;
    transform: translateX(-76%);

    height: 2000px;
`;