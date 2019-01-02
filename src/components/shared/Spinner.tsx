import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% { 
        transform: rotate(1440deg); 
        opacity: 0.05;
    }
`

type params = {
  countBalls: number
  radius: number
  angle: number
  size: number
  ballSize: number
}

const getBalls = ({ countBalls, radius, angle, size, ballSize }: params) => {
  const balls = []
  const offset = ballSize / 2
  for (let i = 0; i < countBalls; i++) {
    const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset
    const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset
    balls.push(
      <Ball
        ballSize={ballSize}
        size={size}
        x={y}
        y={x}
        key={i.toString()}
        index={i}
      />,
    )
  }
  return balls
}

type SpinnerProps = {
  loading: boolean
  size: number
  color?: string
}

export const Spinner: React.FunctionComponent<SpinnerProps> = props => {
  const { size, loading } = props
  const radius = size / 2
  const countBalls = 8
  const ballSize = size / 5
  const angle = 360 / countBalls
  if (loading) {
    return (
      <Wrapper size={size}>
        {getBalls({
          countBalls,
          radius,
          angle,
          size,
          ballSize,
        })}
      </Wrapper>
    )
  }
  return <div />
}

type wrapperProps = {
  size: number
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: wrapperProps) => props.size}px;
  height: ${(props: wrapperProps) => props.size}px;
`

type BallProps = {
  ballSize: number
  index: number
  size: number
  x: number
  y: number
  key: string
}

const Ball = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  width: ${(props: BallProps) => props.ballSize}px;
  height: ${(props: BallProps) => props.ballSize}px;
  border-radius: 50%;
  background-color: ${props =>
    props.theme.name === 'dark' ? '#00ff89' : '#00381e'};
  transform: translateX(-50%) translateY(100%);
  transform-origin: 0 250% 0;
  animation: ${rotate} 4s both infinite;
  animation-timing-function: cubic-bezier(
    0.5,
    ${props => props.index * 0.3},
    0.9,
    0.9
  );
`
