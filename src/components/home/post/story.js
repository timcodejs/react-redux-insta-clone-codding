import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { PUBLIC_URL } from "../../../modules/module";

const Story = () => {
    const [leftDisplay, setLeftDisplay] = useState('none');
    const [rightDisplay, setRightDisplay] = useState('block');
    const { allPosts } = useSelector((state) => state.post);

    const onScrollLeft = useCallback((e) => {
        const pNode = e.target.parentNode.parentNode.parentNode.previousSibling;
        const sNode = e.target.parentNode.parentNode.parentNode.previousSibling.scrollLeft;
        pNode.scrollTo({top: 0, left: -320 + sNode, behavior: 'smooth' });
    }, []);

    const onScrollRight = useCallback((e) => {
        const pNode = e.target.parentNode.parentNode.parentNode.previousSibling;
        const sNode = e.target.parentNode.parentNode.parentNode.previousSibling.scrollLeft;
        pNode.scrollTo({top: 0, left: 320 + sNode, behavior: 'smooth' });
    }, []);

    const onScrollEvent = useCallback((e) => {
        const maxLeft = e.target.scrollWidth - e.target.clientWidth;
        if(e.target.scrollLeft === 0) {
            setLeftDisplay('none');
        } else if(e.target.scrollLeft > 0) {
            setLeftDisplay('block');
            if(e.target.scrollLeft === maxLeft) {
                setRightDisplay('none');
            } else {
                setRightDisplay('block');
            }
        } 
    }, []);

    return(
        <StoryStyled>
            <ul onScroll={onScrollEvent}>
                {allPosts && allPosts.map((post) => (
                <li key={post.id}>
                    <div><img src={post.User.avatar} alt="user avatar" /></div>
                    <div>{post.User.nickname}</div>
                </li>
                ))}
            </ul>
            <div className="scrollBtn">
                <div onClick={onScrollLeft}><button style={{display: leftDisplay}}><img src={PUBLIC_URL+"/images/arrow_left.png"} alt="" /></button></div>
                <div onClick={onScrollRight}><button style={{display: rightDisplay}}><img src={PUBLIC_URL+"/images/arrow_right.png"} alt="" /></button></div>
            </div>
        </StoryStyled>
    )
}

export default Story;

const StoryStyled = styled.div`
    background: rgba(var(--d87,255,255,255),1);
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    box-sizing: border-box;
    border-radius: 3px;
    margin-top: 0;
    padding: 16px 0;
    & ul {
        margin: 0;
        padding: 0;
        padding-left: 20px;
        display: flex;
        overflow-x: scroll;
        &::-webkit-scrollbar { display: none; }
    }
    & ul li {
        width: 70px;
        text-align: center;
        font-size: 12px;
        margin-right: 20px;
    }
    & ul li div {
        width: 56px;
        cursor: pointer;
    }
    & ul li div img {
        width: 100%;
        border-radius: 50%;
    }
    & .scrollBtn {
        width: 614px;
        position: absolute;
        display: flex;
        justify-content: space-between;
        top: 30px;
    }
    & .scrollBtn img {
        display: block;
        width: 43px;
    }
`;