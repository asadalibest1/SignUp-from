import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    form: formReducer,
  },
});
