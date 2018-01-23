import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { EditCardForm } from '../apps/organisms'
import { editAppData } from '../apps/actions'


let EditCardContainer = props => <EditCardForm {...props}/>

const onSubmit = (values, dispatch, props) => {
  if (!values.name) {
    throw new Error({ name: 'Please fill card name' })
  } else {
    dispatch(editAppData(props.cardId, values))
  }
}

EditCardContainer = reduxForm({
  form: 'edit-app',
  onSubmit
})(EditCardContainer)

EditCardContainer = connect(
  (state, props) => ({
    initialValues: state.apps.list[props.cardId]
  }),
)(EditCardContainer)

export default EditCardContainer