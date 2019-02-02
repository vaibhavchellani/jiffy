import React, { ChangeEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, Text } from 'elements'
import { GlobeImg, SpyImg } from 'image'
import Thumb from './thumb'

import * as S from './styles'

type PrivacyProps = {
  values: any
  handleChange: (e: string | ChangeEvent<any>) => void
  handleBlur: (e: any) => void
  setFieldValue: (e: any, _: any) => void
}

const IconImages = [
  'https://github.com/identicons/imshubhamsingh.png',
  'https://github.com/identicons/vaibhav.png',
  'https://github.com/identicons/jiffy.png',
]

const Privacy = (props: PrivacyProps) => {
  const { values, handleChange, handleBlur, setFieldValue } = props
  return (
    <Form.Box>
      <Form.Content>
        <Text size={1.75} themeColor bold>
          Show your Dapp to the world or keep it private.
        </Text>
        <br />
        <Form.Inputs center>
          <Form.Input
            name="mode"
            onChange={handleChange}
            onBlur={handleBlur}
            value={'public'}
            type="radio"
            id="cb-public"
            checked={values.mode === 'public'}
          />
          <S.CheckboxLabel htmlFor="cb-public">
            <Text size={1.5} themeColor className="text">
              Public
            </Text>
            <S.Img src={GlobeImg} style={{ left: '-12px' }} />
          </S.CheckboxLabel>

          <Form.Input
            name="mode"
            onChange={handleChange}
            onBlur={handleBlur}
            value={'private'}
            type="radio"
            id="cb-private"
            checked={values.mode === 'private'}
          />
          <S.CheckboxLabel htmlFor="cb-private">
            <Text size={1.5} themeColor className="text">
              Private
            </Text>
            <S.Img src={SpyImg} style={{ left: '61px' }} />
          </S.CheckboxLabel>
        </Form.Inputs>
        <br />
        <Form.Label style={{ margin: '10px 0 -14px 0px' }}>
          Select App Icon
        </Form.Label>
        <br />

        <Form.Inputs center>
          {values.customIcon ? (
            <>
              <Form.Input
                name="icon"
                onChange={handleChange}
                onBlur={handleBlur}
                value={'icon0'}
                type="radio"
                id="cb-icon0"
                checked={values.icon === 'icon0'}
              />
              <S.CheckboxLabel htmlFor="cb-icon0" width={150} height={150}>
                <Thumb
                  file={values.customIcon}
                  remove={() => {
                    setFieldValue('customIcon', null)
                  }}
                />
              </S.CheckboxLabel>
            </>
          ) : (
            ''
          )}

          {values.customIcon ? (
            ''
          ) : (
            <S.Upload>
              <S.UploadLabel
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                }}
                htmlFor="cb-icon0"
              >
                <Form.Input
                  name="icon"
                  onChange={event => {
                    // @ts-ignore:disable-next-line
                    setFieldValue('customIcon', event.currentTarget.files[0])
                    setFieldValue('icon', null)
                  }}
                  onBlur={handleBlur}
                  type="file"
                  id="cb-icon0"
                />
                <Form.Label
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <FontAwesomeIcon icon="plus" size="lg" />
                  <span>Upload</span>
                </Form.Label>
              </S.UploadLabel>
            </S.Upload>
          )}

          {IconImages.map((icon, index) => {
            return (
              <div key={icon}>
                <Form.Input
                  name="icon"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={`icon${index + 1}`}
                  type="radio"
                  id={`cb-icon${index + 1}`}
                  checked={values.icon === `icon${index + 1}`}
                />
                <S.CheckboxLabel
                  htmlFor={`cb-icon${index + 1}`}
                  width={150}
                  height={150}
                >
                  <img src={icon} width={150} />
                </S.CheckboxLabel>
              </div>
            )
          })}
        </Form.Inputs>
      </Form.Content>
    </Form.Box>
  )
}

export default Privacy
