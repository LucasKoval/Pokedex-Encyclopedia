import React from 'react';
import Link from 'next/link'
import Search from '../components/Search';


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-light bg-white topbar static-top shadow justify-content-between">
                <Link href="/">
                    <a className="nav-link">
                        <img className="img-profile" src="/static/icons/pokeball-1.png" alt="Home" style={{width: '3rem', height: '3rem'}} />
                    </a>
                </Link> 

                <Search />

                <ul className="navbar-nav ml-auto">
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <li className="nav-item">
                        <a className="nav-link" id="userDropdown">
                            <span className="me-2 d-none d-lg-inline text-gray-600 medium">Lucas Koval</span>
                            <img className="img-profile rounded-circle" src="/static/img/avatar.jpg" style={{width: '3rem', height: '3rem'}} />
                        </a>
                    </li>
                </ul>
                 
            </nav>
            <div className="banner">
                <img className="w-100" src="/static/img/banner_5.jpeg" />
            </div>        
        </header>
    );
}

export default Header;