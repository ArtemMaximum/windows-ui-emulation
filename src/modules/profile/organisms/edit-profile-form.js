import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Field } from 'redux-form'
import { ReduxField } from '../../../ui/organisms'
import { Button } from '../../../ui/atoms'


const Form = styled.form`
  overflow: hidden;
`

export const EditProfileForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Field name="name" label="Name:" component={ReduxField}/>
      <Field name="lastName" label="Last name:" component={ReduxField}/>
      <Field name="nickName" label="Nick name:" component={ReduxField}/>
      <Button type="submit" onClick={props.modalClose} theme="info">Save</Button>
    </Form>
  )
}

EditProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
