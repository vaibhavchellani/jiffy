import React, { Component } from 'react'

import * as S from './styles'
import { Wrapper, Text } from 'elements'
import { Spinner } from 'sharedComponent'
import DApp from './DApp'

import TopApps from './TopApps'

type AppType = {
  id: string
  name: string
  createdAt: string
  creatorAddress: string
  network: string
  imgSrc: string
  creatorImgSrc?: string
}

class DAppList extends Component<{
  data: AppType[]
  small?: boolean | undefined
  padding?: string
  height?: number
}> {
  public state = { isOpen: false }

  public componentDidMount() {
    setTimeout(this.toggle, 1000)
  }

  public toggle = () => this.setState({ isOpen: !this.state.isOpen })

  public renderDetails = (
    data: AppType[],
    small: boolean | undefined,
  ): JSX.Element[] | JSX.Element =>
    data.length > 0 ? (
      data.map((el, i) => <DApp key={el.id} {...el} small={small} />)
    ) : (
      <Wrapper>
        <Spinner loading={true} size={60} />
        <Text size={1} themeColor>
          Loading App ...
        </Text>
      </Wrapper>
    )

  public render() {
    const { data, small, padding, height } = this.props
    const { isOpen } = this.state
    return (
      <S.AppList
        pose={isOpen ? 'open' : 'closed'}
        padding={padding}
        height={height}
      >
        {this.renderDetails(data, small)}
      </S.AppList>
    )
  }
}

export { DAppList, TopApps }
