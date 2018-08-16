import React, { Component } from 'react'
import CountDisplay from './CountDisplay'
import styled from 'styled-components';

class App extends Component {
  constructor (props) {
    super(props)
    const savedKarma = Number(localStorage.getItem('karma'))
    this.state = {
      karma: savedKarma || 0
    }
  }
  commit = karma => this.setState({karma}, () => {
      localStorage.setItem('karma', karma)
  });
  render () {
    return (
      <Page>
        <Title>karmakarma</Title>
        <Button
          onClick={() => this.commit(this.state.karma + 1)}
          color='#333'
        />
        <CountWrapper>
          <CountDisplay count={this.state.karma} />
        </CountWrapper>
        <Button
          reverse
          onClick={() => this.commit(this.state.karma - 1)}
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
  height: 0;
  margin: 0 auto 0;
  padding: 10vh 20vw;
  transform: ${p => p.reverse ? 'rotate(180deg)' : ''};
  position: relative;
  z-index: 100;
  &:before {
    width: 0;
    height: 0;
    content: '';
    border-left: 30vw solid #0000;
    border-right: 30vw solid #0000;
    border-bottom: 6vh solid ${p => p.color};
  }
`
const CountWrapper = styled.div`
  height: 60vh;
  position: relative;
`

export default App
