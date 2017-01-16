// import { take, call, put, select } from 'redux-saga/effects';
//import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestLinksSucceeded, requestLinksFailed } from './actions';
import { REQUEST_LINKS } from './constants';

function  fetchLinksFromServer(topicName){
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then(response => response.json());
}

function* fetchLinks(action){
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    //dispatch to store
    yield put(requestLinksSucceeded(links));
  } catch(e) {
  // dispatch action on error
    yield put(requestLinksFailed(e.error));
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
