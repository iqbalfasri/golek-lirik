import React, { useReducer } from 'react';

const initialState = [];
const reducer = useReducer((state = initialState, action) => {
  switch (action) {
    case 'FETCH_DATA':
      return {...state}

    default:
      return state;
  }
})

export default reducer;