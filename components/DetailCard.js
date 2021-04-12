import React from 'react';
import Loader from '../components/Loader';
import useLoader from '../hooks/useLoader';
import typeColors from '../utils/typeColors';

const DetailCard = props => {
    const { loading } = useLoader();
    if (loading) return <Loader />;

    return (
        <div className="card p-4 border-groove max-size bg-light">
            <div className="row justify-content-evenly g-0">
            
                <div className="col-md-4">
                    <img className="w-100" src={props.image} alt="pokemon" />
                </div>
                
                <div className="col-md-6">
                    <div className="card-body">
                        
                        <h2 className="card-title text-uppercase">{props.name} | #{props.id}</h2>
                        
                        <div className="container">
                            <div className="row">
                                
                                <div className="d-flex justify-content-between align-items-start py-4">
                                    
                                    <div className="col-6 col-sm-3">
                                        <div className="fw-bold text-secondary">Height </div>
                                        <div>{props.height} cm</div>
                                    </div>

                                    <div className="col-6 col-sm-3">
                                        <div className="fw-bold text-secondary">Type </div>
                                        {
                                            props.type.map(type => {
                                                return (
                                                    <div className="btn m-1 text-capitalize" style={{ backgroundColor: typeColors[type.type.name] }}>{type.type.name}</div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>

                                <div className="w-100"></div>

                                <div className="d-flex justify-content-between align-self-end">
                                    
                                    <div className="col-6 col-sm-3 ">
                                        <div className="fw-bold text-secondary">Weight </div>
                                        <div>{props.weight} kg</div>
                                    </div>

                                    <div className="col-6 col-sm-3 ">
                                        <div className="fw-bold text-secondary">Abilities </div>
                                        <div className="text-capitalize">{props.ability}</div>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default DetailCard;


