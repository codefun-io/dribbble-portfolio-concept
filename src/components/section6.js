import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: -0.1rem;
  padding: 7rem;
  text-align: center;
  background-color: #f2f2f2;
  @media only screen and (max-width: 618px) {
    padding: 7rem 2rem;
  }
`

const Text = styled.div`
  font-size: 5rem;
  font-weight: lighter;
  @media only screen and (max-width: 618px) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: 320px) {
    font-size: 3rem;
  }
`

const Form = styled.form`
  padding-top: 5rem;
`

const TextField = styled.div`
  width: 35rem;
`

const Input = styled.input`
  border-bottom: 1px solid #606060;
  padding-left: 0.8rem;
`

const Label = styled.label`
  color: #606060;
  padding-left: 0.8rem;
`

const Button = styled.div`
  position: relative;
  background: #ffffff !important;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Triangle = styled.img`
  width: 35%;
  position: absolute;
  left: 35%;
  bottom: 35%;
`

const GetUpdate = () => (
  <Wrapper>
    <Text>Get updates</Text>
    <Form action="#">
      <TextField className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <Input className="mdl-textfield__input" type="text" />
        <Label className="mdl-textfield__label" for="sample1">
          Email Address
        </Label>
      </TextField>
    </Form>
    <br />
    <Button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
      <Triangle src="static/img/play-button.svg" />
    </Button>
  </Wrapper>
)

export default GetUpdate
