import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: -0.1rem;
  text-align: center;
  background-color: #f2f2f2;
  height: 26rem;
`

const Text = styled.div`
  font-size: 4.5rem;
  font-weight: lighter;
  padding: ${props => props.theme && props.theme.padding};
  @media only screen and (max-width: 618px) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: 320px) {
    font-size: 3rem;
  }
`

const Form = styled.form`
  padding-top: 4rem;
`

const TextField = styled.div`
  width: 35rem !important;
  @media only screen and (max-width: 500px) {
    width: 24rem !important;
  }
  @media only screen and (max-width: 320px) {
    width: 20rem !important;
  }
`

const Input = styled.input`
  border-bottom: 1px solid #606060;
  padding-left: 0.8rem !important;
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
    <Text theme={{ padding: '6rem 0 0 0' }}>Get updates</Text>
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
