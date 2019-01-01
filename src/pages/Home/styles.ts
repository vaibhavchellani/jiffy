import styled from '@emotion/styled'

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
  padding: 84px 40px;
  position: relative;
  height: 444px;
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
