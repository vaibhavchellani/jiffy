import React, { Component } from 'react'

import Stage from './Stage'
import Progress from './Progress'
import { StepperContent } from './styles'

type StepperState = {
  stage: number
  totalStage: number
}

type StepperProps = {
  intialstage: number
  totalStage: number
  onFinish: () => void
  children: (
    stage: number,
    totalStage: number,
    handleClick: (type: string) => void,
    onFinish: () => void,
  ) => React.ReactNode
}

class Stepper extends Component<StepperProps, StepperState> {
  public static Stage = Stage
  public static Progress = Progress
  public static Content = StepperContent

  public state: StepperState = {
    stage: 1,
    totalStage: this.props.totalStage,
  }

  public componentDidMount() {
    this.setState({
      stage: this.props.intialstage,
    })
  }

  public handleClick = (type: string) =>
    this.setState(prevState => {
      if (type === 'next' && this.state.stage < this.state.totalStage) {
        return { ...prevState, stage: prevState.stage + 1 }
      }
      if (type === 'previous' && this.state.stage > 0) {
        return { ...prevState, stage: prevState.stage - 1 }
      }
      this.props.onFinish()
      return prevState
    })

  public render() {
    const { stage, totalStage } = this.state
    const { children, onFinish } = this.props

    return children(stage, totalStage, this.handleClick, onFinish)
  }
}

export default Stepper
