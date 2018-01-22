import React from 'react'
import { Link } from 'react-router-dom'

import { RootTemplate } from '../templates'

export const NotFoundPage = () => (
  <RootTemplate>
    <h2>Page not found</h2>
    <p>Go to <Link to="/">home</Link> and repeat</p>
  </RootTemplate>
)
