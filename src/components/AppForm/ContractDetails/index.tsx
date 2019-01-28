import React, { Component, ChangeEvent } from 'react'
// import { isEmpty } from 'lodash'
import { FieldArray } from 'formik'
import { Form, Text, Tags } from 'elements'
import { Icon } from 'sharedComponent'

type ContractDetailsProps = {
  values: any
  handleChange: (e: string | ChangeEvent<any>) => void
  handleBlur: (e: any) => void
  setFieldValue: (e: any, _: any) => void
}

export default class ContractDetails extends Component<ContractDetailsProps> {
  public render() {
    const { values, handleChange, handleBlur } = this.props
    return (
      <Form.Box>
        <Form.Content>
          <Text size={1.75} themeColor bold>
            Let’s narrow down your options
          </Text>
          <Form.Inputs>
            <Form.Label>DApp Name</Form.Label>
            <Form.Input
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </Form.Inputs>
          <Form.Inputs>
            <Form.Label>Contract Address</Form.Label>
            <Form.Input
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
          </Form.Inputs>
          <Form.Inputs>
            <Form.Label>Network</Form.Label>
            <Form.Select
              name="network"
              value={values.network}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ display: 'block' }}
            >
              <Form.Option value="" label="Select a network" />
              <Form.Option value="mainnet" label="Ethereum Mainnet" />
              <Form.Option value="ropsten" label="Ropsten Testnet" />
              <Form.Option value="rinkeby" label="Rinkeby Testner" />
              <Form.Option value="kovan" label="Kovan Testnet" />
              <Form.Option value="custom" label="Custom Node" />
            </Form.Select>
          </Form.Inputs>
          <Form.Inputs>
            <Form.Label>Tags</Form.Label>
            <FieldArray
              name="tags"
              render={arrayHelpers => (
                <Form.Tag>
                  <Tags>
                    {values.tags && values.tags.length > 0 ? (
                      values.tags.map((tag: string, index: number) => (
                        <button
                          type="button"
                          key={index}
                          className="tag"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          {tag} <Icon name="cross" size={12} />
                        </button>
                      ))
                    ) : (
                      <div />
                    )}
                    <Form.TagInput
                      onKeyPress={(
                        e: React.KeyboardEvent<HTMLInputElement>,
                      ): void => {
                        if (e.key === 'Enter') {
                          // @ts-ignore:disable-next-line
                          arrayHelpers.push(e.target.value)
                          // @ts-ignore:disable-next-line
                          e.target.value = ''
                        }
                      }}
                    />
                  </Tags>
                </Form.Tag>
              )}
            />
          </Form.Inputs>
          <br />
          <div style={{ textAlign: 'left' }}>
            <Form.Label>
              Fetched ABI Interface <Icon name="tick" size={15} />
            </Form.Label>
          </div>
        </Form.Content>
      </Form.Box>
    )
  }
}
