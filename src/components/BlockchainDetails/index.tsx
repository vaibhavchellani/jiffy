import React, { Component, ReactNode } from 'react'

import * as S from './styles'

import Icon from '../shared/Icon'

type dataType = {
  heading: string
  detail: string
}

const Icons: ReactNode[] = [
  <Icon key="circle" name="circle" size={30} color={'#28C16E'} />,
  <Icon key="block" name="block" size={30} />,
  <Icon key="hourglass" name="hourglass" size={30} />,
  <Icon key="timer" name="timer" size={30} />,
]

export default class BlockchainDetails extends Component<{ data: dataType[] }> {
  public renderDetails = (data: dataType[]) =>
    data.map((el, i) => (
      <div className="data">
        <div className="data__image">{Icons[i]}</div>
        <div className="data__main">
          <div className="data__main--heading">{el.heading}</div>
          <div className="data__main--detail">{el.detail}</div>
        </div>
      </div>
    ))

  public render() {
    const { data } = this.props
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <S.Details initialPose="exit" pose="enter">
          {this.renderDetails(data)}
        </S.Details>
      </div>
    )
  }
}
