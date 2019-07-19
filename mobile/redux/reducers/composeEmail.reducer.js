import composeEmailActions from '../actions/composeEmail.action';

const initialState = {
  to: '',
  subject: '',
  message: '',
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case composeEmailActions.COMPOSE_TO:
      return { ...state, to: payload.to };
    case composeEmailActions.COMPOSE_SUBJECT:
      return { ...state, subject: payload.subject };
    case composeEmailActions.COMPOSE_MESSAGE:
      return { ...state, message: payload.message };
    case composeEmailActions.TRASH_MESSAGE:
      return {
        ...state,
        to: payload.to,
        subject: payload.subject,
        message: payload.message
      };
    case composeEmailActions.SEND_MESSAGE:
      return {
        to: payload.message,
        subject: payload.subject,
        message: payload.message,
        loading: payload.loading
      };
    case composeEmailActions.ERROR_SEND_MESSAGE:
      return { ...state };
    case composeEmailActions.LOADING:
      return { ...state, loading: payload.loading };
    default:
      return state;
  }
};
