import React from 'react';

const DetailCard = () => {
    return (
        <div className="card p-5 border-groove">
            <div className="row g-0">
                
                <div className="col-md-4">
                    <img className="d-flex justify-content-center w-100" src="/static/img/001.png" alt="Pokemon" />
                </div>
                
                <div className="col-md-8 position-relative">
                    <div className="card-body">
                        <h2 className="card-title ms-5">Bulbasaur #001</h2>
                        <div className="">
                            <p className="card-text position-absolute top-50 start-13 translate-middle-y">Height: 1'10''</p>
                            <p className="card-text position-absolute top-50 end-0 translate-middle-y">Type: <button className="btn bg-fire"> Fire</button></p>
                            <p className="card-text position-absolute bottom-0 end-50">Weight: 18.73 lbs (8.5 kg)</p>
                            <p className="card-text position-absolute bottom-0 end-0 mb-3">Abilities: Blaze</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DetailCard;