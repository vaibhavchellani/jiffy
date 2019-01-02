import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'emotion-theming'

import { themes } from 'styles'
import { MainContainer, Wrapper } from 'elements'
import { BlockchainDetails } from 'components'

import { bottomBarDetails } from 'data'
import { Spinner } from 'sharedComponent'

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
  <Suspense
    fallback={
      <Wrapper>
        <Spinner loading={true} size={20} />
      </Wrapper>
    }
  >
    <Component {...props} />
  </Suspense>
)
