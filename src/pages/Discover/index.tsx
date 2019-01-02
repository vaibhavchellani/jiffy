import React, { Component } from 'react'

import { Text } from 'elements'
import { dAppListData } from 'data'
import { DAppList, TopApps } from 'components'

import * as S from './styles'

export default class Discover extends Component {
  public render() {
    return (
      <S.DiscoverContainer>
        <div>
          <Text size={2.95} bold themeColor>
            Discover
          </Text>
          <TopApps data={dAppListData} />
        </div>
        <br />
        <div>
          <Text size={1.5} bold themeColor>
            DApp
          </Text>
          <DAppList
            data={dAppListData}
            padding={'0 40px'}
            height={'calc(100vh*0.50);'}
          />
        </div>
      </S.DiscoverContainer>
    )
  }
}
