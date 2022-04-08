import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const LayoutNav = ({ children }) => {
    return(
        <>
            <Link to="/"><button><img src="/images/logo_L.png" alt="logo" /></button></Link>
            <div>{children}</div>
        </>
    )
}

export default LayoutNav;
