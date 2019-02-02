import styled from '@emotion/styled'

type InputProps = {
  center: boolean
}
export const Form = {
  Box: styled.form`
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
  `,
  Content: styled.div`
    min-width: 320px;
    max-width: 1020px;
    width: 620px;
    text-align: center;
    margin: 0 auto;
    position: relative;
    @media screen and (max-width: 619px) {
      min-width: 20px;
      width: 100%;
    }
  `,
  Inputs: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    ${(props: InputProps) =>
      props.center
        ? `@media screen and (max-width: 620px) {
      justify-content: space-around;
    }`
        : ''}
  `,
  Input: styled.input`
    width: 100%;
    border: 1px solid #4d565f;
    background: #212830;
    padding: 16px;
    outline: none;
    font-size: 21px;
    font-weight: bold;
    border-radius: 7px;
    color: white;
    &[type='radio'][id^='cb'] {
      display: none;
    }
    &[type='file'][id^='cb'] {
      left: 0;
      opacity: 0;
      top: 0;
      bottom: 0;
      width: 100%;
    }
    :checked + label {
      border: 4px solid #28c16e;
      background: #212121;
    }
  `,
  TagInput: styled.input`
    min-width: 1px;
    border: none;
    background: #212830;
    padding: 16px;
    outline: none;
    font-size: 21px;
    font-weight: bold;
    border-radius: 7px;
    color: white;
  `,
  Tag: styled.div`
    width: 100%;
    border: 1px solid #4d565f;
    background: #212830;
    padding: 16px;
    outline: none;
    font-size: 21px;
    min-height: 78px;
    font-weight: bold;
    border-radius: 7px;
    color: white;
  `,
  Label: styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    text-align: left;
    line-height: normal;
    font-size: 16px;
    color: #7d7d7d;
  `,
  Bottom: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 38%;
    padding: 40px 0 0;
    bottom: 0;
    @media screen and (max-width: 720px) {
      height: 30%;
      align-items: center;
    }
  `,
  Select: styled.select`
    width: 100%;
    border: 1px solid #4d565f;
    background: #212830;
    padding: 16px;
    outline: none;
    height: 58px;
    font-size: 21px;
    font-weight: bold;
    border-radius: 7px;
    color: white;
  `,
  Option: styled.option`
    width: 100%;
    border: 1px solid #4d565f;
    background: #212830;
    padding: 16px;
    outline: none;
    font-size: 21px;
    font-weight: bold;
    border-radius: 7px;
    color: white;
  `,
}
