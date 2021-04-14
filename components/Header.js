import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-chillyellow">
            <nav className="navbar navbar-expand navbar-light bg-chillred topbar static-top shadow justify-content-between">
                <Link href="/">
                    <a className="nav-link">
                        <img className="flip" src="/static/icons/pokeball-1.png" alt="Home" style={{width: '3rem', height: '3rem'}}/>
                    </a>
                </Link>
            </nav>
            <div className="banner d-flex justify-content-center">
                <img className="banner-pk" src="/static/img/banner_3.jpeg"/>
            </div> 
        </header>
    );
}

export default Header;