import React, { Component } from 'react'
import Banner from './banner'
import Banner1 from './banner1'
import Banner2 from './banner2'
import styled, { keyframes } from 'styled-components'

let dataBanner = [Banner, Banner1, Banner2]
var point = 0

const HorizontalBlock = styled.div`
  width: 100%;
  height: 450px;
  margin-top: -70px;
  position: absolute;
  z-index: 3;
  border-radius: 15px;
  box-shadow: 4px 4px 12px 4px rgba(20%, 20%, 40%, 0.5);
  background: #fff;
  overflow: hidden;
`

const PassRight = keyframes`
 0% { transform: translateX(300%);}
 100% {transform: translateX(0%);}
`
const PassLeft = keyframes`
0% { transform: translateX(-300%);       }
 100% {transform: translateX(0%);}
 
`
const Animation = styled.div`
  animation: ${props => props.data.PassWay} 0.5s linear;
`

const Carousel = styled.div``
const Carousel2 = Carousel.extend``

class Scoller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      point: 0,
      translateX: 100,
      PassWay: PassLeft,
      flag: true
    }
  }

  render() {
    let data = {
      handleBanner: opt => {
        if (this.state.point + opt < 0) {
          this.state.point = dataBanner.length
        }
        this.state.point = (this.state.point + opt) % dataBanner.length
        //console.log(point)
        let PassWay = opt == -1 ? PassRight : PassLeft
        this.setState({
          point: this.state.point,
          PassWay: PassWay,
          flag: !this.state.flag
        })
        // return point
      },
      getBannerTotal: () => {
        return dataBanner.length
      },
      getCurrentBanner: () => {
        let point0 =
          this.state.point - 1 < 0
            ? dataBanner.length - 1
            : (this.state.point - 1) % dataBanner.length
        let point1 =
          this.state.point + 1 >= dataBanner.length
            ? 0
            : (this.state.point + 1) % dataBanner.length
        // console.log(point0)
        // console.log(point1)
        let Banner0 = dataBanner[point0]
        let Banner1 = dataBanner[this.state.point]
        let Banner2 = dataBanner[point1]

        const config = {
          translateX: this.state.translateX,
          PassWay: this.state.PassWay,
          AnimLeft: this.state.AnimLeft
        }
        //console.log(this.state.PassWay)
        return (
          <HorizontalBlock>
            {this.state.flag === true ? (
              <Carousel data={config}>
                <Animation data={{ PassWay: this.state.PassWay }}>
                  <Banner1 handleBanner={data.handleBanner} />
                </Animation>
              </Carousel>
            ) : (
              <Carousel2 data={config}>
                <Animation data={{ PassWay: this.state.PassWay }}>
                  <Banner1 handleBanner={data.handleBanner} />
                </Animation>
              </Carousel2>
            )}
          </HorizontalBlock>
        )
      }
    }
    return this.props.children(data)
  }
}

export default Scoller
