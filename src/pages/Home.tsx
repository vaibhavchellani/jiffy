import React, { Component } from 'react'
import { jsx } from '@emotion/core'

import { Box, InfoContainer, Text, GradientText, AbsoluteText } from 'elements'
import { Info } from 'components/Info'

import { DeployImg, ChoiceImg, LaptopImg } from 'image'

export default class Home extends Component {
  public render() {
    return (
      <>
        <div>
          <Box background={'#212121'}>
            <Text size={72} width={340} bold>
              Prototype Review
            </Text>
            <AbsoluteText
              size={15}
              width={10}
              left={375}
              top={150}
              color={'#616161'}
              style={{
                transform: 'rotate(90deg)',
              }}
            >
              AND
            </AbsoluteText>
            <GradientText
              background={'linear-gradient(90deg, #8AA4FF 0%, #FF00A8 100%) '}
              size={72}
              bold
            >
              SMART CONTRACTS
            </GradientText>
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
        </div>
      </>
    )
  }
}
