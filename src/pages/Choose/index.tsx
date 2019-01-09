import React, { Component } from 'react'
import { Text } from 'elements'

import * as S from './styles'
import { Icon } from 'components/shared'

import * as Images from 'image'

export default class Choose extends Component {
  public state = { isOpen: false }

  public componentDidMount() {
    setTimeout(this.toggle, 300)
  }

  public toggle = () => this.setState({ isOpen: !this.state.isOpen })

  public render() {
    const { isOpen } = this.state
    return (
      <S.ChooseContainer>
        <Icon name="choose" size={200} />
        <S.ChooseBoxContainer pose={isOpen ? 'enter' : 'exit'}>
          <S.ChooseBox>
            <Text size={5} bold themeColor>
              DApp
            </Text>
            <br />
            <Text size={1.5} themeColor>
              Turn your smart contract into a customizable, easy-to-use dApp.
            </Text>
            <S.Solidity
              src={Images.SolidityLogo}
              alt="solidity"
              className="chooseImg1"
            />
          </S.ChooseBox>
          <S.ChooseBox>
            <Text size={5} bold themeColor>
              Label
            </Text>
            <br />
            <Text size={1.5} themeColor>
              Makes sharing of deployed Dapp and intracting with it like a
              breeze.
            </Text>
            <S.Label src={Images.LabeLImg} alt="label" className="chooseImg2" />
          </S.ChooseBox>
        </S.ChooseBoxContainer>
      </S.ChooseContainer>
    )
  }
}
