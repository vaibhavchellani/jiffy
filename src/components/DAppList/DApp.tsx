import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { List } from 'elements'
import { Icon } from 'sharedComponent'
import { PoseGroup } from 'react-pose'
import { SideIcon } from './styles'

type AppProps = {
  id: string
  name: string
  createdAt: string
  creatorAddress: string
  network: string
  imgSrc: string
  creatorImgSrc?: string
  small?: boolean
}

export default class DApp extends Component<AppProps> {
  public state = {
    hover: false,
  }

  public toggleHover = () => {
    this.setState({
      hover: !this.state.hover,
    })
  }

  public render() {
    const {
      id,
      imgSrc,
      creatorImgSrc,
      name,
      createdAt,
      network,
      small,
    } = this.props

    return (
      <List
        className="app"
        key={id}
        onMouseOver={() => this.setState({ hover: true })}
        onMouseOut={() => this.setState({ hover: false })}
      >
        <div className="app__details">
          {!!!small && <img className="app__details__img" src={imgSrc} />}
          <div className="app__details__name">{name}</div>
        </div>
        <img className="app__creator" src={creatorImgSrc} />
        {!!!small && (
          <div className="app__time">
            <div className="app__time__icon">
              <Icon name="clock" size={30} />
            </div>
            <div className="app__time__createdAt">{createdAt}</div>
          </div>
        )}
        <div className="app__network">{network}</div>
        <PoseGroup>
          {this.state.hover && [
            <SideIcon key="icon">
              <FontAwesomeIcon icon="angle-double-right" size="lg" />
            </SideIcon>,
          ]}
        </PoseGroup>
      </List>
    )
  }
}
