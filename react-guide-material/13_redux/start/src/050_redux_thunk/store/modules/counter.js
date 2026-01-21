import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { asyncCount } from  "../../api/counter";

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    status: '',
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addAsyncWithStatus.pending, (state) => {
      state.status = 'Loading...'
    })
    .addCase(addAsyncWithStatus.fulfilled, (state, action) => {
      state.status = '取得済'
      state.count = state.count + action.payload;
    })
    .addCase(addAsyncWithStatus.rejected, (state) => {
      state.status = 'エラー'
    })
  }
})

const { add, minus } = counter.actions;

const addAsyncWithStatus = createAsyncThunk(
  'counter/asyncCount',
  async (payload) => {
    const responce = await asyncCount(payload);
    return responce.data;
  }
);

const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const responce = await asyncCount(payload);
    dispatch(add(responce.data));
  }
}

const minusAsync = (payload) => {
  return async (dispatch, getState) => {
    const responce = await asyncCount(payload);
    dispatch(minus(responce.data));
  }
}

export { add, minus, addAsync, minusAsync, addAsyncWithStatus };
export default counter.reducer