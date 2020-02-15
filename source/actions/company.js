export const ADD_COMPANY = 'ADD_COMPANY';
import {companies} from '../lib/constanstArray'

export const addCompany = (obj, callback) => (dispatch, getState)=>{
    const newArr = companies.push(obj)

    dispatch({
      type: ADD_COMPANY,
      response: newArr
    })
    callback()
  }
  