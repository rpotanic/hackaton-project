import { combineReducers } from 'redux';

import user from './user'
import companies from './company'

export default combineReducers({
    user: user,
    companies: companies
});
