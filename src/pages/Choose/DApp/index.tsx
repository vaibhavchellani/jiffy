import React, { Component } from 'react'

import * as S from './styles'
import * as P from '../styles'
import * as Images from 'image'

import { ContractDetails, Labels } from 'components'
export default class DApp extends Component {
  public render() {
    return (
      <S.DAppContainer>
        <ContractDetails />
        <Labels />
        <P.Solidity
          src={Images.SolidityLogo}
          alt="solidity"
          className="chooseImg1"
          style={{ bottom: '51px' }}
        />
      </S.DAppContainer>
    )
  }
}
