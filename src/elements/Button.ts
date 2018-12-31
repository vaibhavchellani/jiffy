import styled from '@emotion/styled'

type ButtonProps = {
  width?: string
  height?: string
  shadow?: string
  borderRadius?: number
  backgroundColor: string
}

export const Button = styled.button`
  width: ${(props: ButtonProps) => props.width || '100%'};
  height: ${(props: ButtonProps) => props.height || '0px'};
  transition: transform 100ms ease-in;
  border: 0;
  cursor: pointer;
  outline: none;
  animation: none;
  text-align: center;
  background: ${(props: ButtonProps) => props.backgroundColor}
  border-radius: ${(props: ButtonProps) => `${props.borderRadius || 0}px`};
  ${(props: ButtonProps) =>
    props.shadow
      ? `
  box-shadow: ${props.shadow}
  `
      : ''};
&:active{
    transform: scale(0.99)
}
`
