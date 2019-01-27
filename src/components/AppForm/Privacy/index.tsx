import React, { Component, ChangeEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, Text } from 'elements'
import { GlobeImg, SpyImg } from 'image'
import Thumb from './thumb'

import * as S from './styles'
// import { Icon } from 'sharedComponent'

type PrivacyProps = {
  values: any
  handleChange: (e: string | ChangeEvent<any>) => void
  handleBlur: (e: any) => void
  setFieldValue: (e: any, _: any) => void
}

export default class Privacy extends Component<PrivacyProps> {
  public state = {
    file: false,
  }
  public fileLoad = (state: boolean) => {
    this.setState({
      file: state,
    })
  }
  public render() {
    const { values, handleChange, handleBlur, setFieldValue } = this.props
    const { file } = this.state
    return (
      <Form.Box>
        <Form.Content>
          <Text size={1.75} themeColor bold>
            Show your Dapp to the world or keep it private.
          </Text>
          <br />
          <Form.Inputs>
            <Form.Input
              name="mode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={'public'}
              type="radio"
              id="cb-public"
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
            />
            <S.CheckboxLabel htmlFor="cb-private">
              <Text size={1.5} themeColor className="text">
                Private
              </Text>
              <S.Img src={SpyImg} style={{ left: '61px' }} />
            </S.CheckboxLabel>
          </Form.Inputs>
          <Form.Label style={{ margin: '10px 0 -14px 0px' }}>
            Select App Icon
          </Form.Label>
          <br />
          <Form.Inputs>
            {file ? (
              <S.CheckboxLabel width={150} height={150}>
                <Thumb file={values.icon} fileLoad={this.fileLoad} />
              </S.CheckboxLabel>
            ) : (
              <S.Upload>
                <S.UploadLabel
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                  htmlFor="cb-icon0"
                >
                  <Form.Input
                    name="icon"
                    onChange={event => {
                      // @ts-ignore:disable-next-line
                      setFieldValue('icon', event.currentTarget.files[0])
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

            <Form.Input
              name="icon"
              onChange={handleChange}
              onBlur={handleBlur}
              value={'icon1'}
              type="radio"
              id="cb-icon1"
            />
            <S.CheckboxLabel htmlFor="cb-icon1" width={150} height={150}>
              Icon 1
            </S.CheckboxLabel>

            <Form.Input
              name="icon"
              onChange={handleChange}
              onBlur={handleBlur}
              value={'icon2'}
              type="radio"
              id="cb-icon2"
            />
            <S.CheckboxLabel htmlFor="cb-icon2" width={150} height={150}>
              Icon 2
            </S.CheckboxLabel>
            <Form.Input
              name="icon"
              onChange={handleChange}
              onBlur={handleBlur}
              value={'icon3'}
              type="radio"
              id="cb-icon3"
            />
            <S.CheckboxLabel htmlFor="cb-icon3" width={150} height={150}>
              Icon 3
            </S.CheckboxLabel>
          </Form.Inputs>
        </Form.Content>
      </Form.Box>
    )
  }
}
