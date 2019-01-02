import styled from '@emotion/styled'
import posed from 'react-pose'

export const Details = styled(
  posed.div({
    enter: {
      y: 0,
      opacity: 1,
      delay: 300,
      transition: {
        y: { ease: 'easeInOut', duration: 400 },
        default: { duration: 300 },
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 150 },
    },
  }),
)`
  position: fixed;
  bottom: 0;
  width: calc(100vw * 0.79);
  margin: 55px auto 0;
  height: 59px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: space-around;
  color: ${props => props.theme.color};
  padding: 23px 26px;
  background: ${props => props.theme.bottomBarColor};
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
  @media screen and (min-width: 1024px) {
    padding: 23px 138px;
  }
  @media screen and (max-width: 768px) {
    width: calc(100vw * 0.99);
    padding: 23px;
  }

  @media screen and (max-width: 520px) {
    display: none;
  }
`
