import styled from '@emotion/styled'

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
  padding: 124px 40px;
  position: relative;
  height: calc(100vh * 0.55);
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
