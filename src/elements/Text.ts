import styled from '@emotion/styled'

type TextProps = {
  size?: number
  color?: string
  bold?: boolean
  width?: number
  position?: 'absolute'
}
export const Text = styled.p`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: ${(props: TextProps) => props.size || 28}px;
  color: ${(props: TextProps) => props.color || '#FFFFFF'};
  font-weight: ${(props: TextProps) => (props.bold ? 'bold' : 'normal')};
  width: ${(props: TextProps) => (props.width ? props.width + 'px' : '100%')};
`

type GradientTextProps = TextProps & {
  background: string
}

export const GradientText = styled(Text)`
  text-transform: uppercase;
  background: ${(props: GradientTextProps) => props.background};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

type AbsoluteTextProps = TextProps & {
  left: number
  top: number
}

export const AbsoluteText = styled(Text)`
  position: absolute;
  left: ${(props: AbsoluteTextProps) => props.left}px;
  top: ${(props: AbsoluteTextProps) => props.top}px;
`
