import React from 'react';
import Logo from "../../assets/images/logo.png";
import "./header.scss";

const Header = (props) => {
    return (
        <header data-test="header-test">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logo-test" src={Logo} alt="logo-img"/>
                    <span>TokoKita</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
