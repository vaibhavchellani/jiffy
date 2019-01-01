import styled from '@emotion/styled'
import { transition } from 'styles'

export const AppList = styled.div`
  width: 100%;
  height: 534px;
  font-family: 'Roboto', sans-serif;
  overflow-y: scroll;
  padding: 0 20px;
  margin-top: 10px;
  color: ${props => props.theme.color};
  .app {
    border-radius: 8px;
    padding-top: 8px;
    margin: 10px 0;
    cursor: pointer;
    height: 55px;
    background: rgba(38, 38, 38, 0.34);
    font-size: 15px;
    line-height: 2.6;
    display: flex;
    justify-content: space-around;
    ${transition({ property: 'transform' })}

    &:hover {
      transform: scale(1.035);
      background: rgba(38, 38, 38, 0.55);
    }
    &__details {
      display: flex;
      &__img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    &__creator {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    &__time {
      display: flex;
      &__icon {
        margin-top: 4px;
        margin-right: 10px;
        g {
          fill: ${props => props.theme.color};
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 500px;
  }
`
