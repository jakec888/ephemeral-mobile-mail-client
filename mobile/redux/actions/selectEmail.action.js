export const SELECT_EMAIL = 'SELECT_EMAIL'

export const selectEmail = (emailId) => {
  return (dispatch, getState) => {
    const selectedEmail = getState().RetrieveEmails.emails.filter(
      (email) => email.id === emailId
    )[0]
    dispatch({
      type: SELECT_EMAIL,
      payload: selectedEmail
    })
  }
}

// const selectEmailActions = {
//   SELECT_EMAIL: 'SELECT_EMAIL',
//   selectEmail: (emailId) => {
//     return (dispatch, getState) => {
//       const selectedEmail = getState().RetrieveEmails.emails.filter(
//         (email) => email.id === emailId
//       )[0]
//       dispatch({
//         type: selectEmailActions.SELECT_EMAIL,
//         payload: selectedEmail
//       })
//     }
//   }
// }

// export default selectEmailActions
