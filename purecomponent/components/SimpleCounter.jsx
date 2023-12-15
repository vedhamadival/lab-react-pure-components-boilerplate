import { Component } from 'react'
//Renders even if state or props is not changed
export class SimpleCounter extends Component {
  constructor() {
    super();
  
    this.state = {
       count:0,
       toggle:false
    }
  }
  
  handleIncrement = () =>{
    if(this.state.toggle){
      this.setState({count: this.state.count +1})
    }
    else{
      this.setState({count: this.state.count})
    }
  }

  handleToggle = () =>{
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    console.log("This is a simple component")
    return (
      <div>
        <h1>Simple Component</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleToggle}>SetToggle</button>
        <button onClick={this.handleIncrement}>Counter</button>
      </div>
    )
  }
}

export default SimpleCounter
