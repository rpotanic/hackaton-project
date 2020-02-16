export const ADD_COMPANY = 'ADD_COMPANY';
export const ADD_WORKER = 'ADD_WORKER';
export const ADD_VACANCIE = 'ADD_VACANCIE';
import {companies} from '../lib/constanstArray'

export const addCompany = (obj, callback) => (dispatch, getState)=>{
    const newArr = [...companies, obj]
    console.log(obj);
    
    dispatch({
      type: ADD_COMPANY,
      response: newArr
    })
    callback()
  }

  export const addWorker = (obj, company, callback) => (dispatch, getState)=>{
      console.log(obj);
      
    dispatch({
      type: ADD_WORKER,
      response: {
        response: obj,
        company: company
      }
    })
    callback()
  }
  export const addVacancie = (obj, company, callback) => (dispatch, getState)=>{
      console.log(obj);
      
    dispatch({
      type: ADD_VACANCIE,
      response: {
        response: obj,
        company: company
      }
    })
    callback()
  }
  