import React, { Component } from 'react'
import './App.css'
import CountDisplay from './CountDisplay'
import styled from 'styled-components';

class App extends Component {
  state = { karma: 0 };
  commit = value =>
    () => this.setState(state => ({karma: state.karma + value}));
  render () {
    return (
      <Page>
        <Title>karmakarma</Title>
        <Button
          onClick={this.commit(1)}
          color='#333'
        />
        <div style={{height: '50vh', position: 'relative'}}>
          <CountDisplay count={this.state.karma} />
        </div>
        <Button
          reverse
          onClick={this.commit(-1)}
          color='#333'
        />
      </Page>
    )
  }
}

/*
  Views
  */
const Page = styled.div`
  background-color: #EAEAEA;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`
const Title = styled.div`
  position: absolute;
  text-align: left;
  font-size: 10vh;
  transform: translateX(-22vh) translateY(18vh) rotate(90deg);
  font-family: sans-serif;
  display: inline-block;
  font-family: sans-serif;
  color: #fff;
  opacity: 0.6;
  letter-spacing: -1vh;
  font-weight: bold;
  text-shadow: #cacaca 0.4vh 0px 0.2vh;
`
const Button = styled.div`
  width: 0;
  height: 0;
  border-left: 30vw solid #0000;
  border-right: 30vw solid #0000;
  border-bottom: 6vh solid ${p => p.color};
  margin: 7vh auto 7vh;
  transform: ${p => p.reverse ? 'rotate(180deg)' : ''};
  position: relative;
  z-index: 100;
`

export default App
