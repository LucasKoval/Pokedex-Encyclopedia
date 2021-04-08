import React from 'react';

const Search = () => {
    return (
        <form action="/buscar" method="GET" className="d-inline-flex align-items-center">
            <span>
                <input type="text" name="search" className="form-control align-middle" placeholder="Buscar Pokemon" />
            </span>
            <span>
              
                <button type="submit" className="btn btn-danger"><i class="fas fa-search"></i></button>            
            </span>
        </form>
    );
}

export default Search;