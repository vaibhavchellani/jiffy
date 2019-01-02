import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

export const linearGradients = {
  text: 'linear-gradient(90deg, #8AA4FF 0%, #FF00A8 100%)',
  info: [
    {
      gradient:
        'linear-gradient(257.74deg, #EC576C 3.94%, #EB5780 98.67%, #00E4FF 98.68%)',
      shadow: '9px 12px 23px rgba(235, 87, 128, 0.23)',
    },
    {
      gradient: 'linear-gradient(256.23deg, #F4AF3D 3.61%, #EE963F 97.57%);',
      shadow: '9px 12px 23px rgba(246, 199, 117, 0.23)',
    },
    {
      gradient: 'linear-gradient(256.24deg, #926FF0 4%, #7F69EE 98.46%);',
      shadow: '9px 12px 23px rgba(127, 105, 238, 0.23)',
    },
  ],
  loginButton: {
    gradient: 'linear-gradient(90deg, #6C67CE 0%, #6DA3F4 100%);',
    shadow: '0px 4px 23px rgba(109, 163, 244, 0.46)',
  },
  metamaskButton: {
    bgcolor: '#E88A3A;',
    shadow: '0px 4px 23px rgba(238, 150, 63, 0.56)',
  },
}

export const HomeContainer = styled.div`
  display: flex;
  font-size: 25px;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 520px) {
    display: block;
    font-size: 15px;
  }
`

type BoxProps = {
  background: string
}

export const Box = styled.div`
  max-width: 775px;
  padding: 0 26px;
  overflow: hidden;
  position: relative;
  height: 14em;
  border-radius: 15px;
  background: ${(props: BoxProps) => props.background};
  border-radius: 15px;
  @media screen and (max-width: 520px) {
    min-width: 200px;
    padding: 122px 29px 22px;
    height: 100%;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  max-width: 775px;
  justify-content: space-between;
  padding: 20px 0;
  @media screen and (max-width: 520px) {
    display: block;
    width: 100%;
  }
`

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
`

const rollOver = (
  x: number,
  y: number,
  initDeg?: number,
  finalDeg?: number,
) => keyframes`
      0% {
          opacity:0;
          transform: translate(${x}px,${y}px) ${
  initDeg ? `rotate(${initDeg}deg)` : ''
};
      }
      100% {
          opacity:1;
          transform: translate(0,0) ${finalDeg ? `rotate(${finalDeg}deg)` : ''};
      }
  `

export const EthImage = styled.img`
  position: absolute;
  top: 65px;
  right: 13px;
  animation: ${float} 1.75s ease infinite, ${rollOver(0, 100)} 1.05s;
  width: 157px;
  @media screen and (max-width: 1400px) {
    width: 114px;
  }
  @media screen and (max-width: 520px) {
    width: 94px;
    top: 117px;
  }
  @media screen and (max-width: 320px) {
    width: 61px;
    top: 171px;
  }
`

export const CryptoKitty = styled.img`
  position: absolute;
  top: -17px;
  opacity: 0;
  border-radius: 50%;
  right: -11px;
  width: 83px;
  animation: ${rollOver(50, -60, 45, 0)} 1s cubic-bezier(0.23, 0.15, 0.09, 1.57)
    2s;
  animation-fill-mode: forwards;
  @media screen and (max-width: 520px) {
    width: 93px;
    top: -15px;
  }
`

export const WorldOfEther = styled.img`
  position: absolute;
  top: -36px;
  opacity: 0;
  border-radius: 50%;
  right: 49px;
  width: 83px;
  animation: ${rollOver(-20, -60, 65, 0)} 1s
    cubic-bezier(0.23, 0.15, 0.09, 1.57) 3s;
  animation-fill-mode: forwards;
  @media screen and (max-width: 520px) {
    width: 93px;
    top: -39px;
    right: 64px;
  }
`
