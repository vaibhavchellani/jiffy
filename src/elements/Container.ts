import styled from '@emotion/styled'

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
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

export const BottomContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 114px;
`

type ContainerProps = {
  flexFlow?: string
}

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-flow: ${(props: ContainerProps) =>
    props.flexFlow === 'column' ? 'column' : 'row'};
  @media screen and (max-width: 520px) {
    display: block;
  }
`
