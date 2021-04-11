import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Form, Button } from 'react-bootstrap';

const Header = (props) => {
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

                    <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Pokemon"
                    />

                    {/* <span>
                        <input type="text" name="search" className="form-control align-middle" placeholder="Search Pokemon" />
                    </span> */}
                    
                    <Button block onClick={(e) => props.getPokemon(search)} className="btn poke-button"><i className="fas fa-search"></i></Button>            

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

/*

search: async (req, res) => {
    try {
        const search = req.query.search.toLowerCase();
    
        const products = await db.Product.findAll({
            include: [{
                all: true,
                nested: true
            }],
            order: [
                ['id']
            ],
            group: ['model.id']
        });

        const productFound = products.filter(product => {
            return product.model.category.name.toLowerCase().includes(search) || product.model.name.toLowerCase().includes(search) || product.model.color.name.toLowerCase().includes(search);
        });

        res.render('products/searchResults', { productFound	});

    }catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

*/