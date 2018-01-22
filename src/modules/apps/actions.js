import api from '../../api'
import {
  APPS_RECEIVE_START,
  APPS_RECEIVE_SUCCESS,
  APPS_RECEIVE_FAILURE
} from './action-types'


export const receiveAppsList = options => (dispatch) => {
  dispatch({ type: APPS_RECEIVE_START })
  
  try {
    api.get('/apps.json', options).then(({ data }) => {
      
      if (data.status === 'ok') {
        dispatch({ type: APPS_RECEIVE_SUCCESS, data: data })
      } else {
        dispatch({ type: APPS_RECEIVE_FAILURE, error: data.error })
      }
    }).catch((error) => {
      dispatch({ type: APPS_RECEIVE_FAILURE, error })
    })
  }
  catch (error) {
    dispatch({ type: APPS_RECEIVE_FAILURE, error })
    throw error
  }
}