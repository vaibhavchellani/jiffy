import React from 'react'
// import { isEmpty } from 'lodash'
import { FieldArray } from 'formik'
import { Form, Text, Tags } from 'elements'
import { Icon } from 'sharedComponent'

import Thumb from '../Privacy/thumb'

import { formProps as ReviewProps } from '../index'

import * as S from './styles'

type Images = {
  [index: string]: string
}

const IconImages: Images = {
  icon1: 'https://github.com/identicons/imshubhamsingh.png',
  icon2: 'https://github.com/identicons/vaibhav.png',
  icon3: 'https://github.com/identicons/jiffy.png',
}

const Review = (props: ReviewProps) => {
  const { values } = props
  return (
    <S.ReviewBox>
      <S.ReviewContent>
        <Text size={1.75} themeColor bold>
          Review and Submit
        </Text>
        <S.ReviewDetails>
          <div style={{ flex: 1, padding: '0 10px' }}>
            <S.ReviewTopContainer>
              <div>
                {values.customIcon && values.icon === 'icon0' ? (
                  <>
                    <S.CheckboxLabel width={150} height={150}>
                      <Thumb file={values.customIcon} />
                    </S.CheckboxLabel>
                  </>
                ) : (
                  <S.CheckboxLabel width={150} height={150}>
                    <img src={IconImages[values.icon]} width={150} />{' '}
                  </S.CheckboxLabel>
                )}
              </div>
              <S.ReviewImp>
                <Form.Inputs>
                  <Form.Label>DApp Name</Form.Label>
                  <S.ReviewInput>{values.name}</S.ReviewInput>
                </Form.Inputs>
                <Form.Inputs>
                  <Form.Label>Network</Form.Label>
                  <S.ReviewInput>{values.network}</S.ReviewInput>
                </Form.Inputs>
              </S.ReviewImp>
            </S.ReviewTopContainer>

            <Form.Inputs>
              <Form.Label>Contract Address</Form.Label>
              <S.ReviewInput>{values.address}</S.ReviewInput>
            </Form.Inputs>
            <Form.Inputs>
              <Form.Label>Privacy</Form.Label>
              <S.ReviewInput>{values.mode}</S.ReviewInput>
            </Form.Inputs>
          </div>
          <div style={{ flex: 1, padding: '0 10px' }}>
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
          </div>
        </S.ReviewDetails>

        <br />
      </S.ReviewContent>
    </S.ReviewBox>
  )
}

export default Review
