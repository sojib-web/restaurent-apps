import React, { Component } from 'react'
import Loading from './loading';

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