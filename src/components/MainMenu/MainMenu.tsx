import React from "react";


const MainMenu: React.FC = () => {
    let data: any = [];

    return (
        <nav className="main-menu" id="header">
            <div className="topnav">
                <a className="active" href="#home">Home7</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </nav>)
};

export default MainMenu;
