import React, { Component, ChangeEvent } from 'react'
import { Form, Text } from 'elements'

import * as S from './styles'
// import { Icon } from 'sharedComponent'

type PrivacyProps = {
  values: any
  handleChange: (e: string | ChangeEvent<any>) => void
  handleBlur: (e: any) => void
}

export default class Privacy extends Component<PrivacyProps> {
  public render() {
    const { values, handleChange, handleBlur } = this.props
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
            </S.CheckboxLabel>
          </Form.Inputs>
          <Form.Label style={{ margin: '10px 0 -14px 0px' }}>
            Select App Icon
          </Form.Label>
          <br />
          <Form.Inputs>
            <Form.Input
              name="icon"
              onChange={handleChange}
              onBlur={handleBlur}
              value={'icon0'}
              type="radio"
              id="cb-icon0"
            />
            <S.CheckboxLabel htmlFor="cb-icon0" width={150} height={150}>
              Add Icon
            </S.CheckboxLabel>

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
