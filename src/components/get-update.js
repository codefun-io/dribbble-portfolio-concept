import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: -0.5rem;
  padding-top: 8rem;
  text-align: center;
  background-color: #f2f2f2;
`

const Text = styled.div`
  font-size: 5rem;
  font-weight: lighter;
`

const Form = styled.form`
  padding-top: 5rem;
`

const Input = styled.input`
  border-bottom: 1px solid #606060;
`

const Label = styled.label`
  color: #606060
`

const GetUpdate = () => (
  <Wrapper>
    <Text>Get updates</Text>
    <Form action="#">
      <div className="mdl-textfield mdl-js-textfield">
        <Input className="mdl-textfield__input" type="text" />
        <Label className="mdl-textfield__label" for="sample1">Email Address</Label>
      </div>
    </Form>
  </Wrapper>
)

export default GetUpdate