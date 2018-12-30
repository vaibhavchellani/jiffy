import styled from '@emotion/styled'

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.background};
  padding: 50px;
  color: white;
  @media screen and (max-width: 520px) {
    padding: 25px;
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
  width: 237px;
  margin: 5px;
  height: 261px;
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
    width: 100%;
    margin: 20px 0;
  }
`
