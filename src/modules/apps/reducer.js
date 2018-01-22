import {
  APPS_RECEIVE_START,
  APPS_RECEIVE_SUCCESS,
  APPS_RECEIVE_FAILURE,
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