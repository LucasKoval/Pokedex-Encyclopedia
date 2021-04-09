import React from 'react';
import Link from 'next/link'
import Search from '../assets/Search';

const Header = () => {
    return (
        <header>
            
            <nav className="navbar navbar-expand navbar-light bg-chillred topbar static-top shadow justify-content-between">
                
                <Link href="/">
                    <a className="nav-link">
                        <img className="flip" src="/static/icons/pokeball-1.png" alt="Home" style={{width: '3rem', height: '3rem'}} />
                    </a>
                </Link> 

                <Search />

                {/* <ul className="navbar-nav ml-auto">
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <li className="nav-item">
                        <a className="nav-link text-white" id="userDropdown">
                            <span className="me-2 d-none d-lg-inline text-gray-600 fw-bold medium">Lucas Koval</span>
                            <img className="img-profile rounded-circle" src="/static/img/avatar.jpg" style={{width: '3rem', height: '3rem'}} />
                        </a>
                    </li>
                </ul> */}
                <ul></ul>
                 
            </nav>

            <div className="banner d-flex justify-content-center">
                <img className="w-100" src="/static/img/banner_3.jpeg" />
            </div>  

        </header>
    );
}

export default Header;