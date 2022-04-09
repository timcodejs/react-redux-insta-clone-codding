import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeMain = () => {
    const navigator = useNavigate();
    const { info } = useSelector((state) => state.user);

    useEffect(() => {
        if(!info) {
            navigator('/login');
        }
    }, [info, navigator]);

    return(
        <>
            HomeMain
        </>
    )
}

export default HomeMain;