import React, { Component } from 'react'

import styled, { injectGlobal } from 'styled-components'

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`
const Item = styled.div`
  background: url(${props => props.data.photo});
  background-size:cover;
  grid-column:${props => props.data.column};
  grid-row: ${props => props.data.row};
  min-width:33%;
  height:370px;
  min-width:100px
  min-height:100px;
  @media(max-width:1025px){
    height:300px;
  }

  @media(max-width:769px){
    height:200px;
  }
  @media(max-width:426px){
    height:150px;
  }
  @media(max-width:376px){
    height:100px;
  }
  

`

export default props => (
  <Wrap>
    <Item data={{ photo: '/static/img/photo1.png', column: 1 / 1, row: 1 }} />
    <Item data={{ photo: '/static/img/photo2.png', column: 1 / 2, row: 1 }} />
    <Item data={{ photo: '/static/img/photo3.png', column: 1 / 3, row: 1 }} />
    <Item data={{ photo: '/static/img/photo4.png', column: 1 / 1, row: 2 }} />
    <Item data={{ photo: '/static/img/photo5.png', column: 1 / 2, row: 2 }} />
    <Item data={{ photo: '/static/img/photo6.png', column: 1 / 3, row: 2 }} />
  </Wrap>
)
