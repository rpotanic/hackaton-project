
import {ADD_COMPANY} from '../actions/company'
import { getLocalStorage } from '../lib/functions';
import {companies} from '../lib/constanstArray';
import {COMPANIES} from '../lib/storageVariables';


localStorage.setItem(COMPANIES, JSON.stringify(companies))

const STATE = {
    companies: JSON.parse(localStorage.getItem(COMPANIES)) || []
};

export default function (state = STATE, action) {
  switch (action.type) {
    case ADD_COMPANY:
      if (action.response)
      localStorage.setItem(COMPANIES, JSON.stringify(action.response))
      console.log(action.response);
      
        return {
          ...state, companies: action.response
        };
    default:
      return state;
  }
}
