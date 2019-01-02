import React, { Component } from 'react'
import { Wrapper } from 'elements'
import { Icon } from 'sharedComponent'
import * as S from './styles'

type TopAppProp = {
  id: string
  name: string
  network: string
  createdAt: string
  imgSrc: string
}

type TopAppState = {
  isOpen: boolean
}

export default class TopApps extends Component<
  { data: TopAppProp[] },
  TopAppState
> {
  public state = { isOpen: false }

  public componentDidMount() {
    setTimeout(this.toggle, 1000)
  }

  public toggle = () => this.setState({ isOpen: !this.state.isOpen })

  public renderList = (data: TopAppProp[]) =>
    data.map((el: TopAppProp) => (
      <S.TopAppList className="app" key={el.id}>
        <div className="app__details">
          <img className="app__details__img" src={el.imgSrc} />
          <p>{el.name}</p>
        </div>
        <hr className="app__line" />
        <div className="app__bottomDetails">
          <div className="app__bottomDetails__network">
            <Icon name="ethereum" size={20} />
            <div>{el.network}</div>
          </div>
          {/* <div>{createdAt}</div> */}
          <div className="app__bottomDetails__time">
            <Icon name="clock" size={20} />
            <div>3 days</div>
          </div>
        </div>
      </S.TopAppList>
    ))

  public render() {
    const { data } = this.props
    const { isOpen } = this.state
    return (
      <Wrapper margin={'0 36px'} style={{ background: 'transparent' }}>
        <S.TopApp pose={isOpen ? 'open' : 'closed'}>
          {this.renderList(data)}
        </S.TopApp>
      </Wrapper>
    )
  }
}
