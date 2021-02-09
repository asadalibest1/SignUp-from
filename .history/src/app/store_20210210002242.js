import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/Slice/Slice';

export default configureStore({
  reducer: {
    form: formReducer,
  },
});
