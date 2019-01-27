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
  outline?: boolean
  backgroundColor?: string
}

export const FormButton = styled.button`
  background: ${(props: FormButtonProps) =>
    props.outline ? 'transparent' : '#3ec28f'};
  border-radius: 9px;
  width: ${(props: FormButtonProps) => props.width || '100%'};
  height: ${(props: FormButtonProps) => props.height || '0px'};
  border: ${(props: FormButtonProps) =>
    props.outline ? '2px solid #3ec28f' : 'none'};
  height: 70px;
  outline: none;
  margin: 7px;
  cursor: pointer;
  ${transition([
    { property: 'background' },
    { property: 'opacity' },
    { property: 'transform' },
  ])}
  &:hover {
    background: ${(props: FormButtonProps) =>
      props.outline ? 'transparent' : '#3ec'};
      border ${(props: FormButtonProps) =>
        props.outline ? '2px solid #3ec' : 'transparent'};   
  }
  &:active{
    transform: scale(0.99);
  }
  &:disabled {
    cursor: disabled;
    opacity: 0.5;
    &:hover {
      background: #3ec28f;
    }
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  & .tag {
    background: #28c16e;
    padding: 3px 10px;
    color: white;
    display: flex;
    height: 32px;
    line-height: 2;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    margin: 10px 10px 0 0;
    border-radius: 7px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    & span {
      color: #1b8a4e;
    }
    & svg {
      margin: 6px 0 0 6px;
    }
  }
`
