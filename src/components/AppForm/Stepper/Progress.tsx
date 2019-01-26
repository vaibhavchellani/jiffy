import React, { Component } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text, FormButton } from 'elements'
import { transition } from 'styles'

type ProgressProps = {
  handleClick: (type: string) => void
  stage: number
  totalStage: number
}
export default class Progress extends Component<ProgressProps> {
  public render() {
    const { handleClick, stage, totalStage } = this.props
    return (
      <Bottom stage={stage > 1 ? true : false}>
        {stage === 1 ? (
          <FormButton
            height={'30px'}
            width={'320px'}
            onClick={() => handleClick('next')}
          >
            <Text size={1.75}>
              Continue <FontAwesomeIcon icon="angle-right" size="lg" />
            </Text>
          </FormButton>
        ) : (
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <FormButton
              height={'30px'}
              width={'320px'}
              onClick={() => handleClick('previous')}
              outline
            >
              <Text size={1.75}>
                <FontAwesomeIcon icon="angle-left" size="lg" /> Back
              </Text>
            </FormButton>
            <FormButton
              height={'30px'}
              width={'320px'}
              onClick={() => handleClick('next')}
            >
              <Text size={1.75}>
                {stage === totalStage ? (
                  'Submit'
                ) : (
                  <span>
                    Continue <FontAwesomeIcon icon="angle-right" size="lg" />
                  </span>
                )}
              </Text>
            </FormButton>
          </div>
        )}
        <Bar stage={stage} totalStage={totalStage + 1}>
          {stage > 1 ? (
            <span>{Math.floor((stage / (totalStage + 1)) * 100)}%</span>
          ) : (
            ''
          )}
        </Bar>
      </Bottom>
    )
  }
}

type ButtonProps = {
  stage: boolean
}

type BarProps = {
  stage: number
  totalStage: number
}
const Bottom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: ${(props: ButtonProps) =>
    props.stage ? 'space-between' : 'center'};
  padding: 20px;
  height: 130px;
  background: ${(props: ButtonProps) =>
    props.stage ? '#22292f' : 'transparent'};
  z-index: 2;
  position: relative;
  box-shadow: ${(props: ButtonProps) =>
    props.stage ? `17px 4px 32px #000000` : 'none'};
`
const Bar = styled.div`
  width: ${(props: BarProps) =>
    props.stage === 1
      ? '0%'
      : Math.floor((props.stage / props.totalStage) * 100)}%;
  ${transition([{ property: 'width' }])}
  background: #3ec28f;
  height: 17px;
  position: absolute;
  text-align: center;
  bottom: 0;
  left: 0;
  & span {
    color: white;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }
`
