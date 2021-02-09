import { configureStore } from '@reduxjs/toolkit';
import counterReducer2 from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer2,
  },
});
