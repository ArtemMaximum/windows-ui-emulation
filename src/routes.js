import configureStore from 'configure-store'
import React from 'react'

import { Provider } from 'react-redux'
import { HomePage } from 'modules/apps/pages'
import { RootTemplate, NotFoundPage } from 'ui'
import { Switch, Route } from 'react-router-dom'

const store = configureStore();

export default () => (
  <RootTemplate>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Provider>
  </RootTemplate>
)
