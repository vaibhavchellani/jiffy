import React, { Component } from 'react'

import * as S from './styles'

import { SolidityLogo } from 'image'

export default class Submit extends Component {
  public render() {
    return (
      <S.SubmitContainer>
        <div className="loading">100%</div>
        <div className="images">
          <S.SubmitImage src={SolidityLogo} />
        </div>
      </S.SubmitContainer>
    )
  }
}
