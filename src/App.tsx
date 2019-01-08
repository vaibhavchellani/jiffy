import React, { lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'emotion-theming'

import { themes } from 'styles'
import { MainContainer } from 'elements'
import { BlockchainDetails } from 'components'

import { bottomBarDetails } from 'data'
import { WaitingComponent } from 'sharedComponent'

const LazyHome = lazy(() => import('pages/Home'))
const LazyDiscover = lazy(() => import('pages/Discover'))
const LazyChoose = lazy(() => import('pages/Choose'))

const night: boolean = true

export default () => (
  <IntlProvider locale="en">
    <ThemeProvider theme={themes[night ? 'dark' : 'light']}>
      <MainContainer>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WaitingComponent(LazyHome)} />
            <Route
              path="/discover"
              component={WaitingComponent(LazyDiscover)}
            />
            <Route path="/choose" component={WaitingComponent(LazyChoose)} />
          </Switch>
        </BrowserRouter>
      </MainContainer>
      <BlockchainDetails data={bottomBarDetails} />
    </ThemeProvider>
  </IntlProvider>
)
