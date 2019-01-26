import React, { Component } from 'react'

import * as S from './styles'
import * as P from '../styles'
import * as Images from 'image'

import { ContractDetails, Stepper } from 'components'
export default class DApp extends Component {
  public render() {
    return (
      <S.DAppContainer>
        <P.Solidity
          src={Images.SolidityLogo}
          alt="solidity"
          className="chooseImg1"
          style={{ bottom: '-10px' }}
        />
        <Stepper
          intialstage={1}
          totalStage={4}
          onFinish={() => alert('finish')}
        >
          {(stage, totalStage, handleClick, onFinish) => (
            <>
              <Stepper.Content>
                <Stepper.Stage
                  stage={stage}
                  num={1}
                  stepComponent={ContractDetails}
                />
                <Stepper.Stage
                  stage={stage}
                  num={2}
                  stepComponent={() => <div>2</div>}
                />
                <Stepper.Stage
                  stage={stage}
                  num={3}
                  stepComponent={() => <div>3</div>}
                />
                <Stepper.Stage
                  stage={stage}
                  num={4}
                  stepComponent={() => <div>4</div>}
                />
              </Stepper.Content>
              <div>
                <Stepper.Progress
                  handleClick={handleClick}
                  stage={stage}
                  totalStage={totalStage}
                />
              </div>
            </>
          )}
        </Stepper>
        {/* <ContractDetails /> */}
        {/* <Labels /> */}
      </S.DAppContainer>
    )
  }
}
