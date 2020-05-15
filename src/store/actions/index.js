import axios from 'axios';

export const FETCH_TACOS_START = "FETCH_TACOS_START";
export const FETCH_TACOS_SUCCESS = "FETCH_TACOS_SUCCESS";
export const FETCH_TACOS_FAILURE = "FETCH_TACOS_FAILURE";

export const fetchTacos = () => {
  // make an async request
  // redux-thunk allows us to return functions instead of objects
  return dispatch => {
    dispatch({ type: FETCH_TACOS_START });
    // then make the async call
    axios
      .get("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_TACOS_SUCCESS, payload: res.data });
      })
      .catch(err => {
          dispatch({type: FETCH_TACOS_FAILURE, payload: err});
      })
  };
};
