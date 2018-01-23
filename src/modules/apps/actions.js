import api from '../../api'
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

export const changeCardColor = (id, value) => (dispatch) => {
  dispatch({ type: CARD_COLOR_CHANGE_START })
  
  try {
    dispatch({ type: CARD_COLOR_CHANGE_SUCCESS, id: id, data: { color: value } })
  }
  catch (error) {
    dispatch({ type: CARD_COLOR_CHANGE_FAILURE, error })
  }
}

export const editAppData = (id, values) => (dispatch) => {
  dispatch({ type: CARD_DATA_CHANGE_START })
  
  try {
    dispatch({ type: CARD_DATA_CHANGE_SUCCESS, id: id, data: values })
  }
  catch (error) {
    dispatch({ type: CARD_DATA_CHANGE_FAILURE, error })
  }
}