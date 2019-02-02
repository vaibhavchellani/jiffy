import { ChangeEvent } from 'react'
import ContractDetails from './ContractDetails'
import Labels from './Labels'
import Stepper from './Stepper'
import Privacy from './Privacy'
import Review from './Review'

type formProps = {
  values: any
  handleChange: (e: string | ChangeEvent<any>) => void
  handleBlur: (e: any) => void
  setFieldValue: (e: any, _: any) => void
}

export { formProps, ContractDetails, Labels, Stepper, Privacy, Review }
