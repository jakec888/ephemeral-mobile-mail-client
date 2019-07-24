import API from '../../api/email';

const retrieveEmailActions = {
  GET_EMAILS: 'GET_EMAILS',
  SEND_EMAIL: 'SEND_EMAIL',
  LOADING_EMAIL: 'LOADING_EMAIL',
  loadingEmail: (status) => {
    return (dispatch) => {
      dispatch({
        type: retrieveEmailActions.LOADING_EMAIL,
        payload: status
      });
    };
  },
  retrieveEmails: (folder) => {
    return (dispatch, getState) => {
      const profile = getState().Profile;
      return API.get('/get-emails', {
        params: {
          RequestedFolder: folder,
          email: profile.email,
          password: profile.password,
          imap_server: profile.imap_server,
          imap_port: profile.imap_port
        }
      })
        .then((result) => {
          dispatch({
            type: retrieveEmailActions.GET_EMAILS,
            payload: { emails: result.data.emails, error: false }
          });
        })
        .catch((err) => {
          alert('Please Limit To Folders With Less Than 25 Emails');
          dispatch({
            type: retrieveEmailActions.GET_EMAILS,
            payload: { error: true, errorMessage: `${err}` }
          });
        });
    };
  },
  sendEmailTest: (email) => {
    return (dispatch, getState) => {
      const Profile = getState().Profile;
      API.post('/smtp', {
        email: Profile.email,
        password: Profile.password,
        smtp_server: Profile.smtp_server,
        smtp_port: Profile.smtp_port,
        fromAddress: Profile.email,
        name: Profile.NAME,
        toAddress: email.toAddress,
        subject: email.subject,
        bodyPLAIN: email.bodyPLAIN,
        bodyHTML: email.bodyHTML
      })
        .then((result) => {
          dispatch({
            type: retrieveEmailActions.SEND_EMAIL,
            payload: result.data
          });
        })
        .catch((err) => {
          dispatch({
            type: retrieveEmailActions.SEND_EMAIL,
            payload: err
          });
        });
    };
  }
};

export default retrieveEmailActions;
