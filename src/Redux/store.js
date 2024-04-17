import { createStore } from 'redux';
import authReducer from './reducers';

const store = createStore(authReducer);

export default store;

// Mimicking API call and setting isLoggedIn variable
//
import { login, logout } from './actions';
import store from './store';

// To mimic a successful login
//
store.dispatch(login());

// To mimic logging out
//
store.dispatch(logout());

// Later in your code, you can access the isLoggedIn variable from the Redux store state:
//
const isLoggedIn = store.getState().isLoggedIn;
console.log('Is user logged in?', isLoggedIn);