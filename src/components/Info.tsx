import React from 'react'
import { InfoBox } from 'elements'

type InfoProps = {
  background: string
  shadow?: string
  text: string
  heading: string
  imgSrc: string
}

export const Info: React.FunctionComponent<InfoProps> = props => {
  const { background, text, imgSrc, shadow, heading } = props
  return (
    <InfoBox background={background} shadow={shadow}>
      <div>
        <img src={imgSrc} />
      </div>
      <div className="heading">{heading}</div>
      <div className="text">{text}</div>
    </InfoBox>
  )
}
