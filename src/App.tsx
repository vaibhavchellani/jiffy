import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'

import { themes } from 'styles'
import { MainContainer, BottomContainer } from 'elements'
import { BlockchainDetails } from 'components'

import { bottomBarDetails } from 'data'

const LazyHome = lazy(() => import('pages/Home'))

const night: boolean = false

export default () => (
  <ThemeProvider theme={themes[night ? 'dark' : 'light']}>
    <MainContainer>
      <BrowserRouter>
        <Route exact path="/" component={WaitingComponent(LazyHome)} />
      </BrowserRouter>
    </MainContainer>
    <BottomContainer>
      <BlockchainDetails data={bottomBarDetails} />
    </BottomContainer>
  </ThemeProvider>
)

const WaitingComponent = <P extends object>(
  Component: React.ComponentType<P>,
) => (props: P) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
)
