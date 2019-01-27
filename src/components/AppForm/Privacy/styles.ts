import styled from '@emotion/styled'

export const Inline = styled.div`
  display: inline-block;
`
export const Checkboxes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

type CheckBoxLabelProps = {
  width?: number
  height?: number
}

export const CheckboxLabel = styled.label`
  width: ${(props: CheckBoxLabelProps) => props.width || 290}px;
  display: block;
  cursor: pointer;
  height: ${(props: CheckBoxLabelProps) => props.height || 274}px;
  margin: 10px auto;
  background: #22292f;
  border: 2px solid #4d565f;
  box-sizing: border-box;
  border-radius: 15px;
  & p.text {
    margin-top: 32px;
  }
`

export const Checkbox = styled.label`
  width: 290px;
  display: block;
  cursor: pointer;
  height: 274.88px;
  margin: 10px auto;
  background: #22292f;
  border: 2px solid #4d565f;
  box-sizing: border-box;
  border-radius: 15px;
  & p.text {
    margin-top: 32px;
  }
`
