import { combineReducers } from 'redux';
import user from './user';

const rootRedicer = combineReducers({
    user,
});

export default rootRedicer;