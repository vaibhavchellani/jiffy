import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './styles'
import * as P from '../styles'
import * as Images from 'image'

import { ContractDetails, Stepper, Privacy, Review, Submit } from 'components'
import { Text } from 'elements'

type formValue = {
  name: string
  address: string
  network: 'Select Network' | 'ropsten' | 'rinkeby' | 'mainnet' | 'custom'
  tags: string[]
  mode: 'public' | 'private'
  icon: File | null | string
  customIcon: File | null
}

const formCollection = [ContractDetails, Privacy, Review]
class DApp extends Component {
  public init: formValue = {
    name: '',
    address: '',
    network: 'Select Network',
    tags: [],
    mode: 'public',
    icon: null,
    customIcon: null,
  }
  public state = {
    submit: true,
  }
  public render() {
    const { submit } = this.state
    if (!submit) {
      return (
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <div>
            <S.Back>
              <Link to="/choose" className="link">
                <Text size={1.5} bold style={{ margin: '-27px 0 16px' }}>
                  <FontAwesomeIcon icon="arrow-left" size="sm" /> DApp
                </Text>
              </Link>
            </S.Back>
          </div>
          <S.DAppContainer>
            <P.Solidity
              src={Images.SolidityLogo}
              alt="solidity"
              className="chooseImg1"
              style={{ bottom: '-10px' }}
            />
            <Formik
              initialValues={{ ...this.init }}
              validationSchema={Yup.object().shape({
                name: Yup.string()
                  .min(3, 'Name must be at least 3 characters long.')
                  .required('Name is required.'),
                address: Yup.string().required('Address is required.'),
                network: Yup.string().required('Network is required.'),
                tags: Yup.array(),
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                this.setState({ submit: true })
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                dirty,
                setFieldValue,
                /* and other goodies */
              }) => {
                return (
                  <Stepper
                    intialstage={1}
                    totalStage={formCollection.length}
                    values={values}
                    errors={errors}
                    handleSubmit={handleSubmit}
                  >
                    {(stage, totalStage, handleClick, values, errors) => (
                      <>
                        <Stepper.Content>
                          {formCollection.map((form, index) => (
                            <Stepper.Stage
                              stage={stage}
                              num={index + 1}
                              stepComponent={form}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              values={values}
                              setFieldValue={setFieldValue}
                            />
                          ))}
                        </Stepper.Content>
                        <div>
                          <Stepper.Progress
                            handleClick={handleClick}
                            stage={stage}
                            totalStage={totalStage}
                          />
                        </div>
                      </>
                    )}
                  </Stepper>
                )
              }}
            </Formik>
          </S.DAppContainer>
        </div>
      )
    }
    return (
      <div>
        <Submit />
      </div>
    )
  }
}

export default withRouter(DApp)
