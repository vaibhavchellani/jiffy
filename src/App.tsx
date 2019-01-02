import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'emotion-theming'

import { themes } from 'styles'
import { MainContainer, Wrapper } from 'elements'
import { BlockchainDetails } from 'components'

import { bottomBarDetails } from 'data'
import { Spinner } from 'sharedComponent'

const LazyHome = lazy(() => import('pages/Home'))
const LazyDiscover = lazy(() => import('pages/Discover'))

const night: boolean = false

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
          </Switch>
        </BrowserRouter>
      </MainContainer>
      <BlockchainDetails data={bottomBarDetails} />
    </ThemeProvider>
  </IntlProvider>
)

const WaitingComponent = <P extends object>(
  Component: React.ComponentType<P>,
) => (props: P) => (
  <Suspense
    fallback={
      <Wrapper background>
        <Spinner loading={true} size={20} />
      </Wrapper>
    }
  >
    <Component {...props} />
  </Suspense>
)
