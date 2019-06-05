import React, { Component, ChangeEvent } from 'react'

class Stage extends Component<{
  stepComponent: React.ComponentType<{
    values: any
    handleChange: (e: string | ChangeEvent<any>) => void
    handleBlur: (e: any) => void
    setFieldValue: (e: any, _: any) => void
  }>
  stage: number
  num: number
  values: any
  handleChange: (e: string | ChangeEvent<any>) => void
  handleBlur: (e: any) => void
  setFieldValue: (e: any, _: any) => void
}> {
  public render() {
    const {
      stage,
      num,
      stepComponent: StageComponent,
      values,
      handleBlur,
      handleChange,
      setFieldValue,
    } = this.props
    if (stage === num) {
      return (
        <StageComponent
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
      )
    }
    return <div />
  }
}

export default Stage
