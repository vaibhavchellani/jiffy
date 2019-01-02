import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Text } from 'elements'
import { dAppListData } from 'data'
import { DAppList, TopApps } from 'components'

import * as S from './styles'
import { Rocket } from 'image'

export default class Discover extends Component {
  public render() {
    return (
      <S.DiscoverContainer>
        <div
          style={{
            zIndex: 999,
          }}
        >
          <Text size={2.95} bold themeColor className="discoverText">
            Discover
          </Text>
          <TopApps data={dAppListData} />
        </div>
        <br />
        <div
          style={{
            zIndex: 999,
          }}
        >
          <div className="subheading">
            <Text size={1.5} bold themeColor className="discoverText">
              DApp
            </Text>
            <div className="search">
              <FontAwesomeIcon icon="search" size="lg" />
            </div>
          </div>
          <DAppList
            data={dAppListData}
            padding={'0 40px'}
            height={'calc(100vh*0.50);'}
          />
        </div>
        <img className="rocket" src={Rocket} />
      </S.DiscoverContainer>
    )
  }
}
