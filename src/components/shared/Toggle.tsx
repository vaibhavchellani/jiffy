import { Component, ReactNode } from 'react'

type ToggleProps = {
  children: (param: any) => ReactNode
}

export default class Toggle extends Component<ToggleProps> {
  public state = {
    on: false,
  }

  public toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  public render() {
    const { children } = this.props
    return children({
      on: this.state.on,
      toggle: this.toggle,
    })
  }
}
