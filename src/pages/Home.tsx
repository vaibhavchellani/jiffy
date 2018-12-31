import React, { Component } from 'react'
import { css } from 'emotion'

import {
  Container,
  HomeContainer,
  Box,
  InfoContainer,
  Text,
  Button,
} from 'elements'
import { Info } from 'components/Info'

import { DeployImg, ChoiceImg, LaptopImg } from 'image'

const spanStyleCss = css`
  font-weight: normal;
  position: absolute;
  transform: rotate(90deg);
  font-size: 15px;
  color: #616161;
  margin: -46px 30px 26px 84px;
  @media screen and (max-width: 520px) {
    font-size: 12px;
    margin: -30px 30px 26px 52px;
  }
`

export default class Home extends Component {
  public render() {
    return (
      <HomeContainer>
        <Container flexFlow="column">
          <Box background={'#212121'}>
            <Text size={3} bold>
              Prototype <br /> Review
              <span className={spanStyleCss}>AND</span>
            </Text>
            <Text
              gradient
              background={'linear-gradient(90deg, #8AA4FF 0%, #FF00A8 100%) '}
              size={3}
              bold
            >
              SMART <br />
              CONTRACTS
            </Text>
          </Box>
          <InfoContainer>
            <Info
              background={
                'linear-gradient(257.74deg, #EC576C 3.94%, #EB5780 98.67%, #00E4FF 98.68%)'
              }
              shadow={'9px 12px 23px rgba(235, 87, 128, 0.23)'}
              text="Deploy your smart contract to any network using Remix, Clevis, or Truffles"
              heading="Deploy"
              imgSrc={DeployImg}
            />
            <Info
              background={
                'linear-gradient(256.23deg, #F4AF3D 3.61%, #EE963F 97.57%);'
              }
              shadow={'9px 12px 23px rgba(246, 199, 117, 0.23);'}
              text="Enter your ABI, network, and select your customizations."
              heading="Choose"
              imgSrc={ChoiceImg}
            />

            <Info
              background={
                'linear-gradient(256.24deg, #926FF0 4%, #7F69EE 98.46%);'
              }
              shadow={'9px 12px 23px rgba(127, 105, 238, 0.23);'}
              text="Use and share your dApp/labels at a custom URL."
              heading="Use"
              imgSrc={LaptopImg}
            />
          </InfoContainer>
        </Container>
        <Container>
          <Button
            borderRadius={29.5}
            height={'59px'}
            backgroundColor={
              'linear-gradient(90deg, #6C67CE 0%, #6DA3F4 100%);'
            }
            shadow={'0px 4px 23px rgba(109, 163, 244, 0.46)'}
          >
            <Text size={1.5}>Login</Text>
          </Button>
        </Container>
      </HomeContainer>
    )
  }
}
