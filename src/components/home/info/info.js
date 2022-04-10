import React from "react";
import styled from "styled-components";

const Info = () => {
    return(
        <InfoStyled>
            Info
        </InfoStyled>
    )
}

export default Info;

const InfoStyled = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(60%);
    width: 293px;
    border: 1px solid #000;
    box-sizing: border-box;
`;