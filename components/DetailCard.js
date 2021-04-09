import React from 'react';
import { useRouter } from 'next/router'
import { BASE_API_PRODUCTS_IMAGE } from '../config/baseURL';
import Loader from '../components/Loader';
import useFetchOne from '../hooks/useFetchOne';

const DetailCard = (props) => {
    const router = useRouter()
    const id = router.query.id
    const { dataPK, loadingPK, errorPK } = useFetchOne(props.url, []);
    if (loadingPK) return <Loader />;
    if (errorPK) return "Error!";

    return (
        <div className="card p-5 border-groove">
            <div className="row g-0">
                
                <div className="col-md-4">
                    <img className="d-flex justify-content-center w-100" src={`${BASE_API_PRODUCTS_IMAGE}${id}.png`} alt="Pokemon" />
                </div>
                
                <div className="col-md-8 position-relative">
                    <div className="card-body">
                        <h2 className="card-title ms-5">{ dataPK.name } #0{ dataPK.id }</h2>
                        <div className="">
                            <p className="card-text position-absolute top-50 start-13 translate-middle-y">Height: { dataPK.height }</p>
                            <p className="card-text position-absolute top-50 end-0 translate-middle-y">Type: <button className="btn bg-lightgrey"> { dataPK.types[0].type.name }</button></p>
                            <p className="card-text position-absolute bottom-0 end-50">Weight: { dataPK.weight }</p>
                            <p className="card-text position-absolute bottom-0 end-0 mb-3">Abilities: { dataPK.abilities[0].ability.name }</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DetailCard;