import { combineReducers } from 'redux';
import user from './user';
import post from './post';

const rootRedicer = combineReducers({
    user,
    post,
});

export default rootRedicer;