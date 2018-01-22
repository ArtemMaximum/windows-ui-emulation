import api from '../../api'
import {
  PROFILE_RECEIVE_START,
  PROFILE_RECEIVE_SUCCESS,
  PROFILE_RECEIVE_FAILURE
} from './action-types'


export const receiveProfileData = options => (dispatch) => {
  dispatch({ type: PROFILE_RECEIVE_START })
  
  try {
    api.get('/profile.json', options).then(({ data }) => {
      if (data.status === 'ok') {
        dispatch({ type: PROFILE_RECEIVE_SUCCESS, data: data })
      } else {
        dispatch({ type: PROFILE_RECEIVE_FAILURE, error: data.error })
      }
    }).catch((error) => {
      dispatch({ type: PROFILE_RECEIVE_FAILURE, error })
    })
  }
  catch (error) {
    dispatch({ type: PROFILE_RECEIVE_FAILURE, error })
    throw error
  }
}