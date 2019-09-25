import { GET_EMAILS, SEND_EMAIL, LOADING_EMAIL } from '../actions/retrieveEmail.actions'

const initialState = {
  emails: [],
  loading: true,
  error: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EMAILS:
      return { ...state, emails: payload.emails, error: payload.error }
    case SEND_EMAIL:
      return { ...state, sent: payload }
    case LOADING_EMAIL:
      return { ...state, loading: payload }
    default:
      return state
  }
}
