import React, { Component } from 'react'
import styled from 'styled-components'


const ButtonBlock = styled.button`
   background-color:#ffcc68;
   border-radius:15px;
   color:#fff;
   padding:15px 50px;
   margin-top:40px;
   box-shadow:4px 4px 12px 4px rgba(20%,20%,40%,0.2);

`

export const Button = (props) => (
  <ButtonBlock>Learn More</ButtonBlock>
)
