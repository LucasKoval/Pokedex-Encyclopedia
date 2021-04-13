import React, { useState } from 'react';
import Link from 'next/link'
import { Form, Button } from 'react-bootstrap';

const Header = props => {
    const [search, setSearch] = useState('');
    
    return (
        <header>
            
            <nav className="navbar navbar-expand navbar-light bg-chillred topbar static-top shadow justify-content-between">
                
                <Link href="/">
                    <a className="nav-link">
                        <img className="flip" src="/static/icons/pokeball-1.png" alt="Home" style={{width: '3rem', height: '3rem'}} />
                    </a>
                </Link> 

                <Form className="d-inline-flex align-items-center">
                    <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search Pokemon" />
                    <Button block onClick={(e) => props.searchPokemon(search)} className="btn text-dark poke-button">
                        <img className="flip" src="/static/icons/search.png" alt="Home" style={{width: '1rem', height: '1rem'}} />
                    </Button>            
                </Form>

                <ul></ul>
                 
            </nav>

            <div className="banner d-flex justify-content-center">
                <img className="w-100" src="/static/img/banner_3.jpeg" />
            </div> 
             
        </header>
    );
}

export default Header;