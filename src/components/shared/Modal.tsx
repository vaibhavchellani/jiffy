import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import posed, { PoseGroup } from 'react-pose'

import Portal from './Portal'
import Icon from './Icon'
import { elevation, transition } from 'styles'

type ModalProps = {
  children: ReactNode
  toggle: () => void
  on: boolean
}

const Modal: React.FunctionComponent<ModalProps> = props => {
  const { children, toggle, on } = props
  return (
    <Portal>
      <PoseGroup>
        {on && [
          <Shade key="shade" onClick={toggle} />,
          <ModalWrapper key="modal">
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" size={20} color="#e04f5f" />
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
          </ModalWrapper>,
        ]}
      </PoseGroup>
    </Portal>
  )
}

export default Modal

const ModalWrapper = styled(
  posed.div({
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        y: { ease: 'easeInOut' },
        default: { duration: 150 },
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 150 },
    },
  }),
)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalCard = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 10;
  background: white;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  padding: 15px;
  min-width: 320px;
  margin: 0 auto;
  color: #000;
  ${elevation[3]};
  ${transition({
    property: 'box-shadow',
    length: 300,
    ease: 'ease-in',
  })};
  &:hover {
    ${elevation[4]};
  }
  @media screen and (max-width: 520px) {
    margin: 10px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  outline: none;
  border-radius: 50%;
  top: 0;
  right: 0;
  border:none;
  background:transparent
  outline: 0;
  padding: 10px;
  cursor: pointer;
`

const Shade = styled(
  posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  }),
)`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
