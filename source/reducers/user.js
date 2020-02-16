import { AUTH_INFO } from '../actions/info';
import {TOKEN} from '../lib/storageVariables'
import {COMPANY_INFO} from '../lib/storageVariables'


import { getLocalStorage } from '../lib/functions';


const STATE = {
  auth: localStorage.getItem(TOKEN) || '',
  companyInfo: localStorage.getItem(COMPANY_INFO) || []
};

export default function (state = STATE, action) {
  switch (action.type) {
    case AUTH_INFO:
      if (action.response)
       localStorage.setItem(TOKEN, action.response)
        return {
          ...state, auth: action.response
        };
    default:
      return state;
  }
}
