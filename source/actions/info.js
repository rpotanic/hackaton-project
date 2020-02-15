export const AUTH_INFO = 'AUTH_INFO';
export const ADD_VAC = 'ADD_VAC';



export const authotizationF = (inf) => async (dispatch, getState) => {
  const singUpUsers = [
    {
      login: 'Intel',
      pass: '123',
      userType: 'intel'
    },
    {
      login: 'MERA',
      pass: '234',
      userType: 'mera'
    }]

    console.log(inf);
    

  for (let i = 0; i < singUpUsers.length; i++) {
    if (singUpUsers[i].login === inf.login) {
      console.log('удачно');

      dispatch({
        type: AUTH_INFO,
        response: singUpUsers[i].userType
      })
      
    } else {
      
       alert('Проверьте правильность ввода')}
       break
  }
}

export const addVac = (obj, callback) => (dispatch, getState)=>{
  dispatch({
    type: ADD_VAC,
    response: obj
  })
  callback()
}

export const getCompanyInfo = (flag) => () => {
  
}