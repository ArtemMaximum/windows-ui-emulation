import {
  PROFILE_RECEIVE_START,
  PROFILE_RECEIVE_SUCCESS,
  PROFILE_RECEIVE_FAILURE,
  
  PROFILE_EDIT_START,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_FAILURE,
} from './action-types'


const initialState = {
  isFetching: false,
  data: {},
  errorMessage: ''
}

export default function profile(state = initialState, action) {
  switch (action.type) {
    case PROFILE_RECEIVE_START:
    case PROFILE_RECEIVE_SUCCESS:
    case PROFILE_RECEIVE_FAILURE:
      return fetchProfileData(state, action)
    
    case PROFILE_EDIT_START:
    case PROFILE_EDIT_SUCCESS:
    case PROFILE_EDIT_FAILURE:
      return editProfileData(state, action)
    
    default:
      return state
  }
}

function fetchProfileData(state, action) {
  switch (action.type) {
    case PROFILE_RECEIVE_START:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case PROFILE_RECEIVE_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.profile,
        isFetching: false,
      })
    case PROFILE_RECEIVE_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.error,
        isFetching: false,
      })
    default:
      return state
  }
}

function editProfileData(state, action) {
  switch (action.type) {
    case PROFILE_EDIT_START:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case PROFILE_EDIT_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isFetching: false,
      })
    case PROFILE_EDIT_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.error,
        isFetching: false,
      })
    default:
      return state
  }
}