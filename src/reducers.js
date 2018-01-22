import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import apps from './modules/apps/reducer'
import profile from './modules/profile/reducer'

export default combineReducers({
  form,
  apps,
  profile
});