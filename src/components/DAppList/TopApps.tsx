import React, { Component } from 'react'
import { Wrapper, List } from 'elements'
import * as S from './styles'

type TopAppProp = {
  id: string
  name: string
  network: string
  createdAt: string
  imgSrc: string
}

export default class TopApps extends Component<{ data: TopAppProp[] }> {
  public renderList = (data: TopAppProp[]) =>
    data.map((el: TopAppProp) => (
      <div className="app" key={el.id}>
        <div className="app__details">
          <img className="app__details__img" src={el.imgSrc} />
          <p>{el.name}</p>
        </div>
        <hr className="app__line" />
        <div className="app__bottomDetails">
          <div>{el.network}</div>
          {/* <div>{createdAt}</div> */}
          <div>3 days</div>
        </div>
      </div>
    ))

  public render() {
    const { data } = this.props
    return (
      <Wrapper margin={'0 36px'}>
        <S.TopApp>{this.renderList(data)}</S.TopApp>
      </Wrapper>
    )
  }
}
