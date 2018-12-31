import { Component, ReactNode } from 'react'
import { createPortal } from 'react-dom'

const portalRoot: HTMLElement = document.getElementById('portal')

type PortalProps = {
  children: ReactNode
}

export default class Portal extends Component<PortalProps> {
  public el = document.createElement('div')

  public componentDidMount() {
    portalRoot.appendChild(this.el)
  }

  public componentWillUnmount() {
    portalRoot.removeChild(this.el)
  }

  public render() {
    const { children } = this.props
    return createPortal(children, this.el)
  }
}
