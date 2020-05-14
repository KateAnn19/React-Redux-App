import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./Taco.css";

import { fetchTacos } from "../store/actions";

const Taco = ({ fetchTacos, isFetching, tacos }) => {
  console.log("inside taco", tacos);
  useEffect(() => {
    fetchTacos();
  }, [fetchTacos]);

  return (
    <div className="Taco-Container">
      <h1 className="Title">Delicous Taco Recipes</h1>

      {isFetching && <h3>Fetching data...</h3>}

      {!isFetching && tacos && (
        <div>
          <div className="Taco-Recipe">
            <h1 className="Recipe">RECIPE</h1>
            <div className="Recipe-Description">
              <p>{tacos.recipe}</p>
            </div>
          </div>

          {/* condiment  */}

          {tacos.condiment !== undefined ? (
            <>
              <h2 className="Condiment">CONDIMENT NAME</h2>
              <h2>{tacos.condiment.name}</h2>
              <h2 className="Condiment-Recipe">CONDIMENT RECIPE</h2>
              <h2>{tacos.condiment.recipe}</h2>
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
              <h2>{tacos.base_layer.name}</h2>
              <h2 className="Base-Layer-Recipe">BASE LAYER RECIPE</h2>
              <h2>{tacos.base_layer.recipe}</h2>
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
              <h2 className="MIXIN">MIXIN</h2>
              <h2>{tacos.mixin.name}</h2>
              <h2 className="Mixin-Recipe">MIXIN RECIPE</h2>
              <h2>{tacos.mixin.recipe}</h2>
            </>
          ) : (
            <img
              alt="delicious tacos"
              className="Mixin-Image"
              src=""
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
