import React from 'react';
import Navbar from '../navbar/Navbar';
import SocialNetworks from '../socialNetworks/SocialNetworks';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <Navbar />
            <SocialNetworks />
        </aside>
    );
};

export default Sidebar;
