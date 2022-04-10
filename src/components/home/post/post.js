import React from "react";
import styled from "styled-components";

const Post = () => {
    return(
        <PostStyled>
            Post
        </PostStyled>
    )
}

export default Post;

const PostStyled = styled.div`
    background: rgba(var(--d87,255,255,255),1);
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    box-sizing: border-box;
    border-radius: 3px;
    margin-bottom: 24px;
    margin-top: 0;
    padding: 16px 0;
`;