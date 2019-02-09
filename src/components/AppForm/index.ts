import { ChangeEvent } from 'react'
import ContractDetails from './ContractDetails'
import Labels from './Labels'
import Stepper from './Stepper'
import Privacy from './Privacy'
import Review from './Review'

type formProps = {
  values: {
    name: string
    address: string
    network: 'Select Network' | 'ropsten' | 'rinkeby' | 'mainnet' | 'custom'
    tags: string[]
    mode: 'public' | 'private'
    icon: File | null | string
    customIcon: File | null
  }
  handleChange: (e: string | ChangeEvent<any>) => void
  handleBlur: (e: any) => void
  setFieldValue: (e: any, _: any) => void
}

export { formProps, ContractDetails, Labels, Stepper, Privacy, Review }
