import React from "react";
import styled from "styled-components";
import Avatar from "../faker/avatar";
import Name from "../faker/name";

const Story = () => {
    return(
        <StoryStyled>
            <ul>
                <li>
                    <div><Avatar /></div>
                    <div><Name /></div>
                </li>
            </ul>
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
    }
    & ul li {
        width: 70px;
        text-align: center;
        font-size: 12px;
    }
    & ul li div {
        width: 56px;
        cursor: pointer;
    }
`;