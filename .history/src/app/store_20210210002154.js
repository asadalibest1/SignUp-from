import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/counter/Slice';

export default configureStore({
  reducer: {
    form: formReducer,
  },
});
