// import { take, call, put, select } from 'redux-saga/effects';
//import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestLinksSucceeded, requestLinksFailed } from './actions';
import { REQUEST_LINKS, START_ADD } from './constants';
import { push } from 'react-router-redux';

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

function* startAdd(action) {
  yield put(push(`/topics/${action.topicName}/add`));
}

export function* startAddSaga() {
  yield* takeLatest(START_ADD, startAdd);
}

// All sagas to be loaded
export default [
  defaultSaga,
  startAddSaga,
];
