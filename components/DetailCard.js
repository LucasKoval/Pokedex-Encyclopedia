import React from "react";
import typeColors from "../utils/typeColors";

const DetailCard = (props) => {
  return (
    <div className="card p-2 pt-3 border-groove max-size bg-lightgrey">
      <div className="row justify-content-evenly g-0">
        <div className="poke-size">
          <img className="w-100" src={props.image} alt="pokemon" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h2 className="card-title text-uppercase">
              {props.name} | #{props.number}
            </h2>
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between align-items-start py-4">
                  <div className="col-6 col-sm-3">
                    <div className="fw-bold text-secondary">Height </div>
                    <div>{props.height} cm</div>
                  </div>
                  <div className="col-6 col-sm-5">
                    <div className="fw-bold text-secondary">Weight </div>
                    <div>{props.weight} kg</div>
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="d-flex justify-content-between align-self-end">
                  <div className="col-6 col-sm-3">
                    <div className="fw-bold text-secondary">Type </div>
                    {props.types.map((type, index) => {
                      return (
                        <div
                          key={index}
                          className="btn my-1 me-1 border border-dark text-capitalize"
                          style={{
                            backgroundColor: typeColors[type.type.name],
                          }}
                        >
                          {type.type.name}
                        </div>
                      );
                    })}
                  </div>
                  <div className="col-6 col-sm-5">
                    <div className="fw-bold text-secondary">Abilities </div>
                    {props.abilities.map((ability, index) => {
                      return (
                        <div key={index} className="text-capitalize">
                          <img
                            className="w-25"
                            src="/static/icons/attack-2.png"
                            alt="Attack"
                          />
                          {ability.ability.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
