import styled from '@emotion/styled'
import posed from 'react-pose'

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  background: ${props => props.theme.background};
  padding: 50px;
  color: white;
  @media screen and (max-width: 768px) {
    padding: 25px 25px 66px 25px;
    height: 100%;
  }
  @media screen and (max-width: 425px) {
    padding: 25px 5px 66px 5px;
    height: 100%;
  }
`

type ContainerProps = {
  flexFlow?: string
}

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  justify-content: center;
  display: flex;
  flex-flow: ${(props: ContainerProps) =>
    props.flexFlow === 'column' ? 'column' : 'row'};
  @media screen and (max-width: 520px) {
    display: block;
  }
`

export const LoginModalContainer = styled.div`
  display: flex;
  @media screen and (max-width: 520px) {
    display: block;
  }
`

export const Wrapper = styled.div`
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const List = styled(
  posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    },
    hover: {
      scale: 1.035,
      boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
    },
    press: {
      scale: 1.025,
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    },
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 },
  }),
)``
