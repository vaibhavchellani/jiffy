import React, { Component } from 'react'
import { Text, FormButton } from 'elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './styles'
export default class DApp extends Component {
  public render() {
    return (
      <S.DAppContainer>
        <S.Form.Box>
          <S.Form.Content>
            <Text size={1.75} themeColor bold>
              Let’s narrow down your options
            </Text>
            <S.Form.Inputs>
              <S.Form.Label>DApp Name</S.Form.Label>
              <S.Form.Input />
            </S.Form.Inputs>
            <S.Form.Inputs>
              <S.Form.Label>Contract Address</S.Form.Label>
              <S.Form.Input />
            </S.Form.Inputs>
            <S.Form.Inputs>
              <S.Form.Label>Network</S.Form.Label>
              <S.Form.Input />
            </S.Form.Inputs>
            <S.Form.Inputs>
              <S.Form.Label>Tags</S.Form.Label>
              <S.Form.Input />
            </S.Form.Inputs>
          </S.Form.Content>
          <S.Form.Bottom>
            <FormButton height={'30px'} width={'320px'}>
              <Text size={1.75}>
                Continue <FontAwesomeIcon icon="angle-right" size="lg" />
              </Text>
            </FormButton>
          </S.Form.Bottom>
        </S.Form.Box>
      </S.DAppContainer>
    )
  }
}
