import React, { Component, ChangeEvent } from 'react'
import { Form, Text } from 'elements'
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
        </Form.Content>
      </Form.Box>
    )
  }
}
