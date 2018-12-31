import React, { Component } from 'react'

import { AppList } from 'elements'
import Icon from './shared/Icon'

type AppType = {
  name: string
  createdAt: string
  creatorAddress: string
  network: string
  imgSrc: string
  creatorImgSrc?: string
}

export default class DAppList extends Component<{
  data: AppType[]
  small: boolean | undefined
}> {
  public renderDetails = (data: AppType[], small: boolean | undefined) =>
    data.map((el, i) => (
      <div className="app">
        <div className="app__details">
          {!!!small && <img className="app__details__img" src={el.imgSrc} />}
          <div className="app__details__name">{el.name}</div>
        </div>
        <img className="app__creator" src={el.creatorImgSrc} />
        {!!!small && (
          <div className="app__time">
            <div className="app__time__icon">
              <Icon name="clock" size={30} />
            </div>
            <div className="app__time__createdAt">{el.createdAt}</div>
          </div>
        )}
        <div className="app__network">{el.network}</div>
      </div>
    ))

  public render() {
    const { data, small } = this.props
    return <AppList>{this.renderDetails(data, small)}</AppList>
  }
}
