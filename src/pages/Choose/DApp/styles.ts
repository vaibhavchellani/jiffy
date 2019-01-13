import styled from '@emotion/styled'

export const DAppContainer = styled.div`
  width: 100%;
  padding-bottom: 51px;
`

export const Form = {
  Box: styled.div`
    background: ${props => (props.theme.name === 'dark' ? '#22292F' : '')};
    border-radius: 10px;
    padding: 20px 20px 60px 20px;
    height: 100%;
    @media screen and (max-width: 320px) {
      padding: 0;
    }
  `,
  Content: styled.div`
    min-width: 320px;
    max-width: 520px;
    text-align: center;
    margin: 0 auto;
    position: relative;
  `,
  Inputs: styled.div``,
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
}
