import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./Taco.css";

import { fetchTacos } from "../store/actions";

const Taco = ({ fetchTacos, isFetching, tacos }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    fetchTacos();
  }, [fetchTacos]);

  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <div className="Taco-Container">
      <h1 className="Title">Delicous Taco Recipes</h1>

      {isFetching && <h3>Fetching data...</h3>}

      {!isFetching && tacos && (
        <div>
          <div className="scene scene--card">
            <div className={active ? "card is-flipped": "card"} onClick={toggleClass}>
              <div className="card__face card__face--front">
                <img
                  alt="delicous tacos"
                  src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                ></img>
                <h2>Click To See Recipe</h2>
              </div>
              <div className="card__face card__face--back">
                {/* "Taco-Recipe */}
                <h1 className="Recipe">RECIPE</h1>
                <div className="Recipe-Description">
                  <p>{tacos.recipe}</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="md-button shop-button"
            onClick={() => {
              fetchTacos();
            }}
          >
            See Another One?
          </button>

          {/* condiment  */}

          {tacos.condiment !== undefined ? (
            <>
              <h2 className="Condiment">CONDIMENT</h2>
              <h2 className="Condiment">{tacos.condiment.name}</h2>
              <h2 className="Condiment-Recipe">CONDIMENT RECIPE</h2>
              <h2 className="Condiment-Recipe">{tacos.condiment.recipe}</h2>
            </>
          ) : (
            <img
              className="Condiment-Image"
              src="https://images.unsplash.com/photo-1583523660595-ffa1b19c950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
              alt="delicious tacos"
            ></img>
          )}

          {/* base layer */}

          {tacos.base_layer !== undefined ? (
            <>
              <h2 className="Base-Layer">BASE LAYER</h2>
              <h2 className="Base-Layer-Name">{tacos.base_layer.name}</h2>
              <h2 className="Base-Layer-Recipe">BASE LAYER RECIPE</h2>
              <h2 className="Base-Layer-Description">
                {tacos.base_layer.recipe}
              </h2>
            </>
          ) : (
            <img
              alt="delicious tacos"
              className="Base-Layer-Image"
              src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            ></img>
          )}

          {/* mixin */}
          {tacos.mixin !== undefined ? (
            <>
              <h2 className="Mixin">MIXIN</h2>
              <h2 className="Mixin-Recipe">{tacos.mixin.name}</h2>
              <h2 className="Mixin-Recipe">MIXIN RECIPE</h2>
              <h2 className="Mixin-Recipe">{tacos.mixin.recipe}</h2>
            </>
          ) : (
            <img
              alt="delicious tacos"
              className="Mixin-Image"
              src="https://images.unsplash.com/photo-1579932709647-3a151893f730?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            ></img>
          )}
          <button
            className="md-button shop-button"
            onClick={() => {
              fetchTacos();
            }}
          >
            See Another One?
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("this is state in taco", state);
  return {
    isFetching: state.isFetching,
    tacos: state.tacos,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchTacos })(Taco);
