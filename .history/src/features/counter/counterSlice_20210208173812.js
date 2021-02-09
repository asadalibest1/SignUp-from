import { createSlice } from '@reduxjs/toolkit';
const data = [
  {name: "saad", email: "saad@gmail.com", password: "qwerty", occupation: "petrolium engee"},
  {name: "asad", email: "asad@gmail.com", password: "asdfg", occupation: "wed dev"}
]
export const counterSlice = createSlice({
  name: 'counter',
  
  initialState: {
    data: data,
    value: 0,
    name: "saad",
  },
  reducers: {
    increment: (state, action) => {
      state.value = action.payload;
    },
    decrement: (state, action) => {
      state.value = action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});


export const { increment, decrement, changeName } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectCount = state => state.counter.value;
export const name = state => state.counter.name;
export const Data = state => state.counter.data;

export default counterSlice.reducer;
