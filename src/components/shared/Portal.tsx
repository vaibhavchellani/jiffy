import { Component, ReactNode } from 'react'
import { createPortal } from 'react-dom'

const portalRoot: HTMLElement | null = document.getElementById('portal')

type PortalProps = {
  children: ReactNode
}

export default class Portal extends Component<PortalProps> {
  public el = document.createElement('div')

  public componentDidMount() {
    if (portalRoot !== null) {
      portalRoot.appendChild(this.el)
    }
  }

  public componentWillUnmount() {
    if (portalRoot !== null) {
      portalRoot.removeChild(this.el)
    }
  }

  public render() {
    const { children } = this.props
    return createPortal(children, this.el)
  }
}
