import React, { useEffect } from "react";
import styled from "styled-components";
import Story from "./story";
import Post from "./post";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ALLPOSTS_REQUEST } from "../../../reducer/post";

const PostForm = ({setIsOpen}) => {
    const dispatch = useDispatch();
    const { allPosts } = useSelector((state) => state.post);
    const { info } = useSelector((state) => state.user);

    useEffect(() => {
        if(info) {
            dispatch({
                type: LOAD_ALLPOSTS_REQUEST,
            })
        }
    }, []);

    return(
        <PostFormstyled>
            <Story />
            {allPosts && allPosts.map((post) => <Post key={post.id} post={post} setIsOpen={setIsOpen} /> )}
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