import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './reducers/adminReducer';
import courseReducer from './reducers/courseReducer';
import otherReducer from './reducers/otherReducer';
import subscription from './reducers/subscription';
import userReducer from './reducers/userReducer';

// export const url = 'http://localhost:9889';
// export const url = 'https://course-theta.vercel.app';
export const url = 'https://courseuniques.onrender.com';

const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
    enroll: subscription,
    admin:adminReducer,
    other:otherReducer
  },
});

export default store;
