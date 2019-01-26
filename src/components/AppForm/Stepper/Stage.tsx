import React, { Component } from 'react'

class Stage extends Component<{
  stepComponent: React.ComponentType
  stage: number
  num: number
}> {
  public render() {
    const { stage, num, stepComponent: StageComponent } = this.props
    if (stage === num) {
      return <StageComponent />
    }
    return <div />
  }
}

export default Stage
