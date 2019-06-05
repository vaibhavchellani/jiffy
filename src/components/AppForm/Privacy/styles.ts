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
  overflow: hidden;
  position: relative;
  cursor: pointer;
  height: ${(props: CheckBoxLabelProps) => props.height || 274}px;
  background: #22292f;
  border: 4px solid #4d565f;
  box-sizing: border-box;
  border-radius: 15px;
  & p.text {
    margin-top: 32px;
  }
  @media screen and (max-width: 620px) {
    margin: 5px;
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

export const Img = styled.img`
  position: absolute;
  bottom: 0;
`

export const Upload = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  height: 150px;
  background: #22292f;
  border: 4px dashed #4d565f;
  border-radius: 15px;
  box-sizing: border-box;
`

export const UploadLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  & p {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

type UploadedImgProp = {
  icon: boolean
}

export const UploadedImg = styled.label`
  width: 153px;
  display: ${(props: UploadedImgProp) => (props.icon ? 'block' : 'none')};
  overflow: hidden;
  cursor: pointer;
  z-index: 2;
  height: 150px;
  position: relative;
  background: #22292f;
  border: 4px solid #4d565f;
  box-sizing: border-box;
  border-radius: 15px;
  & p.text {
    margin-top: 32px;
  }
`
