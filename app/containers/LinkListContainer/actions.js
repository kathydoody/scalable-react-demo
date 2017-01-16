/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINK_SUCCEEDED ,
  REQUEST_LINK_FAILED
} from './constants';

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

