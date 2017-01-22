/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINK_SUCCEEDED ,
  REQUEST_LINK_FAILED,
  REQUEST_LINKS,
  START_ADD,
} from './constants';

export function startAdd(topicName){
  return {
    type: START_ADD,
    topicName
  }
}

export function requestLinks(topicName) {
  return {
    type:  REQUEST_LINKS,
    topicName,
  };
}

export function requestLinksSucceeded(links) {
  return {
    type: REQUEST_LINK_SUCCEEDED,
    links,
  };
}
export function requestLinksFailed(error) {
  return {
    type:  REQUEST_LINK_FAILED,
    error,
  };
}

