import React, { Component } from 'react'
import { Container, Text, Button } from 'elements'

import * as S from './styles'
import { Info, DAppList } from 'components'
import { DeployImg, ChoiceImg, LaptopImg } from 'image'
import { spanStyleCss } from 'styles'

import { dAppListData, InfoData } from 'data'

const images = [DeployImg, ChoiceImg, LaptopImg]
export default class Home extends Component {
  public render() {
    return (
      <S.HomeContainer>
        <Container flexFlow="column">
          <S.Box background={'#212121'}>
            <Text size={3} bold>
              Prototype <br /> Review
              <span className={spanStyleCss}>AND</span>
            </Text>
            <Text gradient background={S.linearGradients.text} size={3} bold>
              SMART <br />
              CONTRACTS
            </Text>
          </S.Box>
          <S.InfoContainer>
            {InfoData.map((info, i) => (
              <Info
                background={S.linearGradients.info[i].gradient}
                shadow={S.linearGradients.info[i].shadow}
                text={info.text}
                heading={info.heading}
                imgSrc={images[i]}
              />
            ))}
          </S.InfoContainer>
        </Container>
        <Container flexFlow="column">
          <div>
            <Text
              size={1.5}
              themeColor
              style={{
                padding: '0 20px',
              }}
            >
              Recent Public dApps
            </Text>
            <DAppList data={dAppListData} small />
          </div>
          <Button
            borderRadius={29.5}
            height={'59px'}
            backgroundColor={
              'linear-gradient(90deg, #6C67CE 0%, #6DA3F4 100%);'
            }
            shadow={'0px 4px 23px rgba(109, 163, 244, 0.46)'}
            style={{
              margin: '14px 0',
            }}
          >
            <Text size={1.5}>Login</Text>
          </Button>
        </Container>
      </S.HomeContainer>
    )
  }
}
