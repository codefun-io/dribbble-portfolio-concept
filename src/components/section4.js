import React, { Component } from 'react'
import styled from 'styled-components'
import Banner from './banner'
const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  grid-template-rows: 30px 1fr 30px;
  min-height: 368px;
  background: url('/static/img/bg.png');
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 20px;
`
const BannerWrap = styled.div`
  position: relative;
  grid-column: 2/3;
  grid-row: 2;
`
const ItemLeft = styled.div`
  grid-column: 1/1;
  grid-row: 2;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
`
const ItemRight = styled.div`
  grid-column: 3/3;
  grid-row: 2;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
`
const Image = styled.div`
  background: url(${props => props.data.image});
  background-size: cover;
  width: 200px;
  height: 200px;
`

export default () => (
  <Wrap>
    <ItemLeft>
      <Image data={{ image: '/static/img/phone.png' }} />
    </ItemLeft>
    <ItemRight>
      <Image data={{ image: '/static/img/pc.png' }} />
    </ItemRight>
    <BannerWrap>
      <Banner top={-70} />
    </BannerWrap>
  </Wrap>
)