import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { POKEMON_IMAGE_URL } from '../config/baseURL';
import Loader from '../components/Loader';
import useFetchOne from '../hooks/useFetchOne';

const DetailCard = (props) => {
    const router = useRouter()
    const id = router.query.id
    const { dataPkm, loadingPkm, errorPkm } = useFetchOne();
    if (loadingPkm) return <Loader />;
    if (errorPkm) return "Error!";

    return (
        <div className="card p-4 border-groove max-size bg-light">
            <div className="row justify-content-evenly g-0">
                
                <div className="col-md-4">
                    <img className="w-100" src={`${ POKEMON_IMAGE_URL }${ id }.png`} alt="Pokemon" />
                </div>
                
                <div className="col-md-6">
                    <div className="card-body">
                        <h2 className="card-title text-uppercase">{ dataPkm.name } | #{ dataPkm.id }</h2>
                        <div className="container">
                            <div className="row">
                                
                                <div className="d-flex justify-content-between align-items-start py-4">
                                    
                                    <div className="col-6 col-sm-3">
                                        <div className="fw-bold text-secondary">Height </div>
                                        <div>{ dataPkm.height * 10 } cm</div>
                                    </div>

                                    <div className="col-6 col-sm-3">
                                        <div className="fw-bold text-secondary">Type </div>
                                        <div className="btn bg-lightgrey text-capitalize"> { dataPkm.types[0].type.name }</div>
                                    </div>

                                </div>

                                <div className="w-100"></div>

                                <div className="d-flex justify-content-between align-self-end">
                                    
                                    <div className="col-6 col-sm-3 ">
                                        <div className="fw-bold text-secondary">Weight </div>
                                        <div>{ dataPkm.weight / 10 } kg</div>
                                    </div>

                                    <div className="col-6 col-sm-3 ">
                                        <div className="fw-bold text-secondary">Abilities </div>
                                        <div className="text-capitalize">{ dataPkm.abilities[0].ability.name }</div>
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