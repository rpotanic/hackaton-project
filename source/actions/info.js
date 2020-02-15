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
    },
    {
      login: 'ROGA i KOPITA',
      pass: '2334',
      userType: 'Roga i Kopita'
    }
  ]

  console.log(inf);
  const newArr = singUpUsers.filter((item) => item.login === inf.login)

  if (newArr.length && newArr[0].pass === inf.password) {
    console.log('удачно');

    dispatch({
      type: AUTH_INFO,
      response: newArr[0].userType
    })
  } else {

    alert('Проверьте правильность ввода')
  }

}

export const addVac = (obj, callback) => (dispatch, getState) => {
  dispatch({
    type: ADD_VAC,
    response: obj
  })
  callback()
}

export const getCompanyInfo = (flag) => () => {

}