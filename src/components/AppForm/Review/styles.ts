import styled from '@emotion/styled'

export const ReviewContent = styled.div`
  min-width: 320px;
  max-width: 1020px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 619px) {
    min-width: 20px;
    width: 100%;
  }
`

export const ReviewBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => (props.theme.name === 'dark' ? '#22292F' : '')};
  border-radius: 10px;
  padding: 30px 20px 0px 20px;
  height: 100%;
  font-size: 16px;
  @media screen and (max-width: 320px) {
    padding: 20px;
  }
`

export const ReviewDetails = styled.div`
  display: flex;
  justify-content: space-around;
  & ~ div {
    margin: 10px;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`

type CheckBoxLabelProps = {
  width?: number
  height?: number
}

export const CheckboxLabel = styled.label`
  width: ${(props: CheckBoxLabelProps) => props.width || 290}px;
  display: block;
  margin-top: 50px;
  margin-right: 25px;
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
`

export const ReviewInput = styled.div`
  width: 100%;
  border: 1px solid #4d565f;
  background: #212830;
  padding: 16px;
  outline: none;
  font-family: 'Roboto', sans-serif;
  height: 57px;
  text-align: left;
  font-size: 21px;
  font-weight: bold;
  border-radius: 7px;
  color: white;
`

export const ReviewImp = styled.div`
  width: 100%;
`

export const ReviewTopContainer = styled.div`
  display: flex;
  @media screen and (max-width: 320px) {
    flex-direction: column;
    align-items: center;
  }
`
