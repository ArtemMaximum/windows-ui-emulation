import { findIndex, propEq } from 'ramda'
import {
  APPS_RECEIVE_START,
  APPS_RECEIVE_SUCCESS,
  APPS_RECEIVE_FAILURE,
  
  CARD_COLOR_CHANGE_START,
  CARD_COLOR_CHANGE_SUCCESS,
  CARD_COLOR_CHANGE_FAILURE,
  
  CARD_DATA_CHANGE_START,
  CARD_DATA_CHANGE_SUCCESS,
  CARD_DATA_CHANGE_FAILURE,
} from './action-types'


const initialState = {
  isFetching: false,
  list: [],
  total: 0,
  errorMessage: ''
}

export default function apps(state = initialState, action) {
  switch (action.type) {
    case APPS_RECEIVE_START:
    case APPS_RECEIVE_SUCCESS:
    case APPS_RECEIVE_FAILURE:
      return fetchApps(state, action)
    
    case CARD_COLOR_CHANGE_START:
    case CARD_COLOR_CHANGE_SUCCESS:
    case CARD_COLOR_CHANGE_FAILURE:
    
    case CARD_DATA_CHANGE_START:
    case CARD_DATA_CHANGE_SUCCESS:
    case CARD_DATA_CHANGE_FAILURE:
      return changeApp(state, action)
    
    default:
      return state
  }
}

function fetchApps(state, action) {
  switch (action.type) {
    case APPS_RECEIVE_START:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case APPS_RECEIVE_SUCCESS:
      return Object.assign({}, state, {
        list: action.data.apps,
        total: action.data.apps.length,
        isFetching: false,
      })
    case APPS_RECEIVE_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.error,
        isFetching: false,
      })
    default:
      return state
  }
}

function changeApp(state, action) {
  switch (action.type) {
    case CARD_COLOR_CHANGE_START:
    case CARD_DATA_CHANGE_START:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case CARD_COLOR_CHANGE_SUCCESS:
    case CARD_DATA_CHANGE_SUCCESS:
      let index = findIndex(propEq('id', action.id))(state.list);
      
      return Object.assign({}, state, {
        list: [
          ...state.list.slice(0, index),
          Object.assign({}, state.list[index], action.data),
          ...state.list.slice(index + 1)
        ]
      })
    
    case CARD_COLOR_CHANGE_FAILURE:
    case CARD_DATA_CHANGE_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.error,
        isFetching: false,
      })
    default:
      return state
  }
}