import React, { Component } from 'react'
import Banner from './banner'
import Banner1 from './banner1'
import Banner2 from './banner2'

let dataBanner = [Banner, Banner1, Banner2]
var point = 0

class Scoller extends Component {
  constructor(props) {
    super(props)
    this.state = { point: 0 }
  }

  render() {
    let data = {
      handleBanner: opt => {
        if (this.state.point + opt < 0) {
          this.state.point = dataBanner.length
        }
        this.state.point = (this.state.point + opt) % dataBanner.length
        //console.log(point)
        this.setState({ point: this.state.point })
        // return point
      },
      getBannerTotal: () => {
        return dataBanner.length
      },
      getCurrentBanner: () => {
        let Banner = dataBanner[this.state.point]
        return <Banner top={-70} handleBanner={data.handleBanner} />
      }
    }
    return this.props.children(data)
  }
}

export default Scoller
