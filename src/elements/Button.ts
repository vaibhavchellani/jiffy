import styled from '@emotion/styled'
import { transition } from 'styles'

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
  &:hover {
    
  }
  &:active{
      transform: scale(0.99)
  }
`

type FormButtonProps = {
  width?: string
  height?: string
  shadow?: string
  borderRadius?: number
  backgroundColor?: string
}

export const FormButton = styled.button`
  background: #3ec28f;
  border-radius: 9px;
  width: ${(props: FormButtonProps) => props.width || '100%'};
  height: ${(props: FormButtonProps) => props.height || '0px'};
  border: none;
  height: 70px;
  outline: none;
  cursor: pointer;
  ${transition([{ property: 'background' }])}
  &:hover {
    background: #3ec;
  }
`
