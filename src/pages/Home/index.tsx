import React, { Component } from 'react'
import { Container, Text, Button, LoginModalContainer } from 'elements'
import { Toggle, Modal } from 'sharedComponent'

import * as S from './styles'
import { Info, DAppList } from 'components'
import { DeployImg, ChoiceImg, LaptopImg, MetamaskLogo } from 'image'
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
          <Toggle>
            {({ on, toggle }) => (
              <>
                <Button
                  borderRadius={29.5}
                  height={'59px'}
                  backgroundColor={S.linearGradients.loginButton.gradient}
                  shadow={S.linearGradients.loginButton.shadow}
                  style={{
                    margin: '14px 0',
                  }}
                  onClick={toggle}
                >
                  <Text size={1.5}>Login</Text>
                </Button>
                <Modal on={on} toggle={toggle}>
                  <LoginModalContainer>
                    <img
                      src={MetamaskLogo}
                      alt="metamaskLogo"
                      style={{
                        margin: '-56px -65px -35px -61px',
                        paddingRight: 73,
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginTop: 25,
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        Connect to the MetaMask browser wallet.
                      </p>
                      <Button
                        borderRadius={10}
                        height={'59px'}
                        backgroundColor={
                          S.linearGradients.metamaskButton.bgcolor
                        }
                        shadow={S.linearGradients.metamaskButton.shadow}
                        style={{
                          margin: '14px 0',
                        }}
                      >
                        <Text size={1.5}>Connect to Metamask</Text>
                      </Button>
                    </div>
                  </LoginModalContainer>
                </Modal>
              </>
            )}
          </Toggle>
        </Container>
      </S.HomeContainer>
    )
  }
}
