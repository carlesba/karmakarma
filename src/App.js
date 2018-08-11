import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = { karma: 0 };
  commit = value =>
    () => this.setState(state => ({karma: state.karma + value}));
  render () {
    return (
      <div>
        <h1>karmakarma</h1>
        <div>
        <button onClick={this.commit(1)}>+1</button>
        </div>
        <div>{this.state.karma}</div>
        <div>
        <button onClick={this.commit(-1)}>-1</button>
        </div>
      </div>
    )
  }
}

export default App
