import styled from '@emotion/styled'

type TextProps = {
  size?: number
  color?: string
  bold?: boolean
  width?: number
  position?: string
  background?: string
  gradient?: boolean
  top?: number
  left?: number
}
export const Text = styled.p`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: ${(props: TextProps) => props.size || 28}px;
  color: ${(props: TextProps) => props.color || '#FFFFFF'};
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
