import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"], 
      treasureLocation: null
    }
  }

// componentDidMount - Used for when the page loads, so when you first get on a page, this page will react automatically

componentDidMount() {
  let treasure = Math.floor(Math.random() * this.state.board.length)
  let bomb = Math.floor(Math.random() * this.state.board.length)
  this.setState ({treasureLocation: treasure, bomb})
}

  handleGamePlay = (index) => {
    // alert(index)
   //CMD + CNTRL + (space) = pops up emoji list 
    const { board, treasureLocation, bombLocation } = this.state
    if(index === treasureLocation) {
      board[index] = "💎" 
    } else if (index === bombLocation) {
      board[index] = "💣"  
    } else {
      board[index] = "🏝"  
    }
    this.setState({board: board})
  } 


  render() {
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className='gameboard'>
        {this.state.board.map((value, index)=> {
          return(
          <Square 
            key={index}
            value={value}
            index={index}
            handleGamePlay={this.handleGamePlay}
          />
          )
        })}
        </div>
      </>
    )
  }
}
export default App
