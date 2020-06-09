import {all, takeEvery, put, call} from 'redux-saga/effects';
import API from '../../api';
import {SEND_MESSAGE, sendMessageSuccess} from './composeEmail.action';

const onSendEmailRequest = payload => {
  const {
    email,
    password,
    smtp_server,
    smtp_port,
    fromAddress,
    name,
    toAddress,
    subject,
    bodyPLAIN,
  } = payload;
  const result = API.post('/send-email', {
    email,
    password,
    smtp_server,
    smtp_port,
    fromAddress,
    name,
    toAddress,
    subject,
    bodyPLAIN,
  });
  return result;
};

export function* sendMessageAsync({payload}) {
  const result = yield call(onSendEmailRequest, payload);
  yield put(sendMessageSuccess(result));
}

export default function* rootSaga() {
  yield all([takeEvery(SEND_MESSAGE, sendMessageAsync)]);
}
