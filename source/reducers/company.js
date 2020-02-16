
import {ADD_COMPANY, ADD_WORKER, ADD_VACANCIE} from '../actions/company'
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
        case ADD_WORKER:
          if (action.response) {
          const revArr = state.companies.map(item => item.name)
          const index = revArr.indexOf(action.response.company)
           
           state.companies[index].workersRent.splice(2,0, action.response.response)

            return {...state, companies: state.companies}
          }
        case ADD_VACANCIE:
          if (action.response) {
          const revArr = state.companies.map(item => item.name)
          const index = revArr.indexOf(action.response.company)
           
           state.companies[index].vacansies.splice(2,0, action.response.response)

            return {...state, companies: state.companies}
          }
    default:
      return state;
  }
}
