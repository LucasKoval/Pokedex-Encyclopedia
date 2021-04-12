import React from 'react';
import Link from 'next/link'

const Card = props => {
    return (
        <div className="card poke-card border-groove shadow my-3 mx-2 " style={{width: '22rem'}}>
            
            <Link href={`/detail?id=${props.id}`}>
                <a className="nav-link bg-lightgrey p-4 rounded-1">
                    <img className="card-img-top bg-lightgrey" src={props.image} alt="Pokemon" />
                </a>
            </Link>

            <div className="card-body bg-light">
                <h5 className="card-title text-center text-capitalize">{props.name}</h5>
                <p className="card-text text-center">#{props.id}</p>
            </div>

        </div>
    );
}

export default Card;