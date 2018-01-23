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
  form: 'edit-profile',  // a unique identifier for this form
  onSubmit
})(EditProfileContainer)

// You have to connect() to any reducers that you wish to connect to yourself
EditProfileContainer = connect(
  state => ({
    initialValues: state.profile.data // pull initial values from account reducer
  }),
)(EditProfileContainer)

export default EditProfileContainer