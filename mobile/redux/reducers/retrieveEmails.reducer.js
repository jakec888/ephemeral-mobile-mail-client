import retrieveEmailActions from '../actions/retrieveEmail.actions';

const initialState = {
  emails: [],
  loading: true,
  error: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case retrieveEmailActions.GET_EMAILS:
      return { ...state, emails: payload.emails, error: payload.error };
    case retrieveEmailActions.SEND_EMAIL:
      return { ...state, sent: payload };
    case retrieveEmailActions.LOADING_EMAIL:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
