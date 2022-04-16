import React from 'react'
import styled from 'styled-components';

const LayoutOpacity = ({children}) => {
    return (
        <OpacityStyled>
            {children}
        </OpacityStyled>
    )
}

export default LayoutOpacity;

const OpacityStyled = styled.div`
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.85);
`;