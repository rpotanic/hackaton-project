
import {ADD_COMPANY} from '../actions/company'
import { getLocalStorage } from '../lib/functions';
import {companies} from '../lib/constanstArray';


const STATE = {
    companies: companies
};

export default function (state = STATE, action) {
  switch (action.type) {
    case ADD_COMPANY:
      if (action.response)
        return {
          ...state, companies: action.response
        };
    default:
      return state;
  }
}
