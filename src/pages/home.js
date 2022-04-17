import React, { useState } from 'react';
import LayoutNav from '../_layout/layoutNav';
import HomeMain from '../components/home/homeMain';
import UseModal from '../hook/useModal';

const Home = () => {
    const [isOpen, setIsOpen] = useState({
        state: false,
        post: {
            User: {
            id: 1
        }}
    });

    return(
        <>
        <UseModal isOpen={isOpen.state} post={isOpen.post} setIsOpen={setIsOpen} />
        <LayoutNav>
            <HomeMain setIsOpen={setIsOpen} />
        </LayoutNav>
        </>
    )
}

export default Home;