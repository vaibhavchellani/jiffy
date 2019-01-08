import React, { Suspense } from 'react'
import { Wrapper } from 'elements'
import { Spinner } from './Spinner'

export const WaitingComponent = <P extends object>(
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
