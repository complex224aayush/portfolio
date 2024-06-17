import { createReducer } from '@reduxjs/toolkit';

const initialState = {

  user: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase('GET_USER_REQUEST', state => {
      return {
         ...state,
         loading: true,
          error: null
         };
    })
    .addCase('GET_USER_SUCCESS', (state, action) => {
      return { 
        ...state,
         user: action.payload,
         loading: false,
         error: null
         };
    })
    .addCase('GET_USER_FAILURE', (state, action) => {
      return { 
      ...state,
      user: null,
      loading: false,
      error: action.payload
     };
    });
});

export const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('LOGIN_REQUEST', (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase('LOGIN_SUCCESS', (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase('LOGIN_FAILURE', (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    })
 
});
