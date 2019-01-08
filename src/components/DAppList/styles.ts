import styled from '@emotion/styled'
import posed from 'react-pose'
import { transition } from 'styles'

export const AppList = styled(
  posed.div({
    open: {
      y: '0%',
      delayChildren: 200,
      staggerChildren: 200,
    },
    closed: { y: '100%', delay: 300 },
  }),
)`
  width: 100%;
  height: ${props => props.height || '100%'};
  font-family: 'Roboto', sans-serif;
  overflow-y: scroll;
  padding: ${props => props.padding || '0 20px'};
  margin-top: 10px;
  color: ${props => props.theme.color};
  .app {
    &:hover {
      background: ${props =>
        props.theme.name === 'dark' ? '#6b6b6b' : '#cecece'};
    }
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
    ${transition([{ property: 'transform' }, { property: 'background' }])}
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
    padding: 0 5px;
    .app {
      &__creator {
        display: none;
      }
      &__time {
        display: none;
      }
    }
  }
`

export const SideIcon = styled(
  posed.div({
    enter: {
      x: -10,
      opacity: 1,
      transition: {
        y: { ease: 'linear' },
        default: { duration: 150 },
      },
      applyAtStart: { position: 'fixed' },
    },
    exit: {
      x: -50,
      opacity: 0,
      transition: { duration: 150 },
    },
    applyAtStart: { position: 'fixed' },
  }),
)`
  position: fixed;
  right: 10px;
`

export const TopApp = styled(
  posed.div({
    open: { x: '0%', staggerChildren: 100 },
    closed: { x: '-5%' },
  }),
)`
  width: 100%;
  overflow-x: scroll;
  height: 188px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  position: relative;
  border-radius: 8px;
  border-radius: 8px;
  height: 197px;
  z-index: 22;
  color: ${props => props.theme.color};

  .app {
    width: 178px;
    height: 188px;
    cursor: pointer;
    :first-of-type {
      margin-left: 0;
    }
    margin: 0 8px;
    background: ${props =>
      props.theme.name === 'dark' ? '#212121' : '#ababab'};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    position: relative;
    &__details {
      width: 178px;
      height: 145px;
      display: flex;
      font-weight: bold;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &__img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      p {
        font-size: 20px;
      }
    }
    &__line {
      position: absolute;
      width: 179px;
      height: 3px;
      left: 0;
      border: none;
      top: 128px;
      background: ${props => props.theme.background};
    }
    &__bottomDetails {
      display: flex;
      font-size: 15px;
      justify-content: space-around;
      align-items: center;
      width: 178px;
      height: 39px;
      border-radius: 8px;
      &__network {
        display: flex;
        svg {
          margin: -1px;
          fill: ${props => props.theme.color};
        }
      }
      &__time {
        display: flex;
        svg {
          margin: -1px 5px;
          fill: ${props => props.theme.color};
        }
      }
    }
  }
`
export const DAppList = styled(
  posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    },
    hover: {
      scale: 1.035,
      boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
    },
    press: {
      scale: 1.025,
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    },
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 },
  }),
)``

export const TopAppList = styled(
  posed.div({
    open: { x: 0, opacity: 1 },
    closed: { x: -20, opacity: 0 },
  }),
)``
