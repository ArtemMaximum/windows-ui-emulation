import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { EditProfileForm } from '../profile/organisms'
import { editProfile } from '../profile/actions'


let EditProfileContainer = props => <EditProfileForm {...props}/>

const onSubmit = (values, dispatch) => {
  if (!values.name) {
    throw new Error({ name: 'Please enter your name' })
  } else if (!values.lastName) {
    throw new Error({ lastName: 'Please enter your lastName' })
  } else if (!values.nickName) {
    throw new Error({ nickName: 'Please enter your nickName' })
  } else {
    dispatch(editProfile(values))
  }
}

EditProfileContainer = reduxForm({
  form: 'edit-profile',
  onSubmit
})(EditProfileContainer)

function select(state) {
  return {
    initialValues: state.profile.data
  }
}

export default connect(select)(EditProfileContainer)