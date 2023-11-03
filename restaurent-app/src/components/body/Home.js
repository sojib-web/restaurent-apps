import React, { Component } from 'react'
import Loading from '../body/loading'

class Home extends Component {
  render() {
    document.title ='Bohubrhi Restaurent'
    return (
      <div>
        <Loading />
      </div>
    )
  }
}

export default Home;