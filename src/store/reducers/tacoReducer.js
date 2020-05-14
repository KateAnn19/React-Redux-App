import {
    FETCH_TACOS_START,
    FETCH_TACOS_SUCCESS
  } from "../actions";
  
  export const initialState = {
    isFetching: false,
    tacos: null,
    error: ""
  };
  
  export const tacoReducer = (state = initialState, action) => {
    console.log("in taco reducer", state);
    console.log("in car reducer action", action.payload);
    switch (action.type) {
      case FETCH_TACOS_START:
        return {
            ...state,
            isFetching: true
        }
      case FETCH_TACOS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            tacos: action.payload
        }
      default:
        return state;
    }
  };

  export default tacoReducer;
  