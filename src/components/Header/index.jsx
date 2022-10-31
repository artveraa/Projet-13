import "./style.scss"
import Logo from "../../assets/images/argentBankLogo.png"
import {Link} from 'react-router-dom';
import React from 'react';

function Header() {
    return (
        <header className="header-full">
            <Link to={"/"} className={'headerLogo'}>
                <img src={Logo} alt="Argent Bank Logo"/>
            </Link>
            <div className={"headerItem"}>
                <Link to={"/sign-in"} className="btn">Sign In</Link>
            </div>
        </header>
    )
}

export default Header;

