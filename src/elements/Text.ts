import styled from '@emotion/styled'
import posed from 'react-pose'

type TextProps = {
  size?: number
  color?: string
  bold?: boolean
  width?: number
  position?: string
  background?: string
  gradient?: boolean
  top?: number
  themeColor?: boolean
  left?: number
  theme?: {
    color?: string
  }
}
export const Text = styled(
  posed.p({
    enter: {
      x: 0,
      opacity: 1,
      delay: 500,
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
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: ${(props: TextProps) => props.size || 28}em;
  color: ${(props: TextProps) =>
    props.themeColor && props.theme && props.theme.color
      ? props.theme.color
      : props.color || '#FFFFFF'};
  font-weight: ${(props: TextProps) => (props.bold ? 'bold' : 'normal')};
  width: ${(props: TextProps) => (props.width ? props.width + 'px' : '100%')};
  ${(props: TextProps) =>
    props.gradient
      ? ` text-transform: uppercase;
  background: ${props.background};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`
      : ''}
  ${(props: TextProps) =>
    props.position === 'absolute'
      ? `position: absolute;
    left: ${props.left}px;
    top: ${props.top}px;`
      : ''}
`
