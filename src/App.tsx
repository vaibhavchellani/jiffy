import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'

import { themes } from 'styles'
import { MainContainer } from 'elements'

const LazyHome = lazy(() => import('pages/Home'))

const night: boolean = true

export default () => (
  <ThemeProvider theme={themes[night ? 'dark' : 'light']}>
    <MainContainer>
      <BrowserRouter>
        <Route exact path="/" component={WaitingComponent(LazyHome)} />
      </BrowserRouter>
    </MainContainer>
  </ThemeProvider>
)

const WaitingComponent = <P extends object>(
  Component: React.ComponentType<P>,
) => (props: P) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
)
