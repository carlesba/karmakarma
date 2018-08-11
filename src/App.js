import React, { Component } from 'react'
import './App.css'
import Title from './Title'
import Button from './Button'
import Count from './Count'

class App extends Component {
  state = { karma: 0 };
  commit = value =>
    () => this.setState(state => ({karma: state.karma + value}));
  render () {
    return (
      <div>
        <Title>karmakarma</Title>
        <Button
          onClick={this.commit(1)}
          color='blue'
        />
        <Count>{this.state.karma}</Count>
        <Button
          reverse
          onClick={this.commit(-1)}
          color='red'
        />
      </div>
    )
  }
}

export default App
