import React, { Component } from 'react';

class Fermemtation extends Component {
  constructor(props){
    super(props)
    this.state={
      isActive:false
    }
  }

  hendlerButton = () =>{
    this.props.counterChenge()
  }

  autoClickStart = () => {
    if (!this.state.isActive && this.props.timerSettings > 0) {
      const time = this.props.timerSettings * 1000
      console.log(time);

      const promise = new Promise((resolve, reject) => {
        this.timerInterval = setInterval(() => {
          this.props.counterChenge();
          resolve();
        }, time);
      });
      
      promise.then(() => {
        this.setState({
          isActive: false
        });
        
      })
      this.setState({
         isActive: true 
        });
    }
  }


  autoClickStop = () =>{
    this.setState({
      isActive:false
    },()=>{
      clearInterval(this.timerInterval)
    })
  }


  render() {

    const btnType = this.props.btnType ? "Додати" : "Відняти"

    return (
      <div>
        <h1>{this.props.value}</h1>
        <button onClick={this.hendlerButton}>{btnType}</button>
        <button onClick={this.autoClickStart}>Start</button>
        <button onClick={this.autoClickStop}>Stop</button>
      </div>
    );
  }
}

export default Fermemtation;
