import styled from '@emotion/styled'

export const DiscoverContainer = styled.div`
  display: flex;
  font-size: 25px;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 520px) {
    display: block;
    font-size: 15px;
    padding: 0 9px;
  }
`
