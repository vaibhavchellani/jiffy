import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'emotion-theming'

import { themes } from 'styles'
import { MainContainer, BottomContainer } from 'elements'
import { BlockchainDetails } from 'components'

import { bottomBarDetails } from 'data'

const LazyHome = lazy(() => import('pages/Home'))

const night: boolean = true

export default () => (
  <IntlProvider locale="en">
    <ThemeProvider theme={themes[night ? 'dark' : 'light']}>
      <MainContainer>
        <BrowserRouter>
          <Route exact path="/" component={WaitingComponent(LazyHome)} />
        </BrowserRouter>
      </MainContainer>
      <BlockchainDetails data={bottomBarDetails} />
    </ThemeProvider>
  </IntlProvider>
)

const WaitingComponent = <P extends object>(
  Component: React.ComponentType<P>,
) => (props: P) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
)
