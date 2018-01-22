import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import { theme, globalStyles } from './theme'


const render = () => {
  // eslint-disable-next-line no-unused-expressions
  globalStyles()
  const renderFunction = process.env.NODE_ENV === 'development'
    ? ReactDOM.render
    : ReactDOM.hydrate

  renderFunction(
    (
      <AppContainer>
        <ThemeProvider theme={theme}>
          <div>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </AppContainer>
    ),
    document.getElementById('website'),
  )
}

render()

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./routes', render)
  }
}

// https://codesandbox.io/s/qz2261lz76
// maybe: in context only link to store
