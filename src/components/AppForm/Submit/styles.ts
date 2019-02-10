import styled from '@emotion/styled'
import { transition } from 'styles'

export const SubmitContainer = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100vw;
  & .loading {
    font-size: 110px;
    z-index: 3;
    color: #28c16e;
    margin-left: 80px;
  }
  & .images {
  }

  @media screen and (max-width: 620px) {
    justify-content: center;
    & .loading {
      margin-left: 0;
    }
  }
`

export const SubmitImage = styled.img`
  position: absolute;
  width: 451px;
  ${transition([{ property: 'opacity' }])}
  opacity: 0.5;
  bottom: 1px;
  right: 7px;
  filter: contrast(9%);
`
