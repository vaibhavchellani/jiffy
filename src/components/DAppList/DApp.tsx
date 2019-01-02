import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Icon } from 'sharedComponent'
import { PoseGroup } from 'react-pose'
import * as S from './styles'

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

type AppState = {
  hover: boolean
}

export default class DApp extends Component<AppProps, AppState> {
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
      <S.DAppList
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
            <S.SideIcon key="icon">
              <FontAwesomeIcon icon="angle-double-right" size="lg" />
            </S.SideIcon>,
          ]}
        </PoseGroup>
      </S.DAppList>
    )
  }
}
