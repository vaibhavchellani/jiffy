import styled from '@emotion/styled'

type InfoBoxProps = {
  background: string
  shadow?: string
}

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
