import React from 'react';

const Search = () => {
    return (
        <form action="/" method="GET" className="d-inline-flex align-items-center">
            
            <span>
                <input type="text" name="search" className="form-control align-middle" placeholder="Search Pokemon" />
            </span>
            
            <span>
                <button type="submit" className="btn poke-button"><i className="fas fa-search"></i></button>            
            </span>

        </form>
    );
}

export default Search;

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