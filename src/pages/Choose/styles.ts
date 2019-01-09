import styled from '@emotion/styled'
import posed from 'react-pose'
import { transition, themes } from 'styles'

export const ChooseContainer = styled.div`
  width: 100%;
  display: block;
  svg {
    margin: -92px 34px 0 0;
    path {
      fill: ${props => props.theme.color};
      &.hook {
        fill: #f5b63f;
      }
    }
  }
  @media screen and (max-width: 768px) {
  }
`
export const ChooseBoxContainer = styled(
  posed.div({
    enter: {
      x: 0,
      opacity: 1,
      delayChildren: 200,
      staggerChildren: 400,
      transition: {
        x: { ease: 'easeInOut', duration: 400 },
        default: { duration: 300 },
      },
    },
    exit: {
      x: -50,
      opacity: 0,
      transition: { duration: 150 },
    },
  }),
)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const ChooseBox = styled(
  posed.div({
    enter: {
      x: 0,
      opacity: 1,
      delayChildren: 400,
      staggerChildren: 500,
      transition: {
        y: { ease: 'easeInOut', duration: 400 },
        default: { duration: 300 },
      },
    },
    exit: {
      x: -50,
      opacity: 0,
      transition: { duration: 150 },
    },
  }),
)`
  position: relative;
  margin: 20px;
  height: 627px;
  width: 100%;
  padding: 50px;
  overflow: hidden;
  cursor: pointer;
  min-width: 320px;
  ${transition([{ property: 'background' }, { property: 'border' }])}
  background: ${props => (props.theme.name === 'dark' ? '#22292f' : '#cccccc')};
  border-radius: 15px;
  &:hover {
    background: ${props =>
      props.theme.name === 'dark' ? '#212121' : '#ffffff'};
    .chooseImg1 {
      filter: 
      ${props => (props.theme.name === 'dark' ? 'invert(70%)' : 'invert(20%)')};
    }
    .chooseImg2 {
      opacity: 1;
    }
  }
  @media screen and (max-width: 728px) {
    min-width: 20px;
    margin: 30px 0;
  }
`

export const Solidity = styled.img`
  position: absolute;
  width: 223px;
  filter: invert(41%);
  bottom: -38px;
  right: -20px;
  ${transition([{ property: 'filter' }])}
`

export const Label = styled.img`
  position: absolute;
  width: 451px;
  ${transition([{ property: 'opacity' }])}
  opacity: 0.5;
  bottom: -1px;
  right: -10px;
`
