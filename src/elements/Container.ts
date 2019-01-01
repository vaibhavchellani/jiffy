import styled from '@emotion/styled'

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
