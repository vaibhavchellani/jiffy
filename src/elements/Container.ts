import styled from '@emotion/styled'

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.background};
  padding: 50px;
  color: white;
  @media screen and (max-width: 520px) {
    padding: 25px;
    height: 100%;
  }
`

export const BottomContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 114px;
`

export const HomeContainer = styled.div`
  display: flex;
  @media screen and (max-width: 520px) {
    display: block;
  }
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

type BoxProps = {
  background: string
}

export const Box = styled.div`
  max-width: 775px;
  padding: 124px 40px;
  position: relative;
  height: calc(100vh * 1px);
  background: ${(props: BoxProps) => props.background};
  border-radius: 15px;
  @media screen and (max-width: 520px) {
    min-width: 200px;
  }
`

type InfoBoxProps = BoxProps & {
  shadow?: string
}

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

export const InfoBox = styled.div`
  position: relative;
  max-width: 237px;
  margin: 5px;
  min-height: 261px;
  padding: 18px 16px 16px 16px;
  font-family: 'Roboto', sans-serif;
  background: ${(props: InfoBoxProps) => props.background};
  border-radius: 15px;
  box-shadow: ${(props: InfoBoxProps) => props.shadow};
  font-size: 16px;
  text-align: center;
  .heading {
    font-weight: bold;
    font-size: 24px;
    margin-top: 10px;
  }
  .text {
    margin-top: 9px;
  }
  img {
    width: 122px;
  }
  @media screen and (max-width: 520px) {
    display: block;
    max-width: 100%;
    width: 100%;
    margin: 20px 0;
  }
`

export const Details = styled.div`
  width: calc(100vw * 0.75);
  margin: 55px auto 0;
  height: 59px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: space-around;
  color: ${props => (props.theme.name === 'dark' ? '#FFFFFF' : '#000000')};
  padding: 23px 157px;
  background: ${props =>
    props.theme.name === 'dark' ? '#212121' : '#F1F1F1F1'};
  border-radius: 101px 101px 0 0;
  .data {
    display: flex;
    &__image {
      margin-top: -9px;
    }
    &__main {
      margin: -9px 16px;
      &--heading {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 520px) {
    display: none;
  }
`
