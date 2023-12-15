import {PureComponent } from 'react'
//Renders only when state or prop value changes
export class PureCounter extends PureComponent {
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
    console.log("This is a pure component")
    return (
      <div>
        <h1>Pure Component</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleToggle}>SetToggle</button>
        <button onClick={this.handleIncrement}>Counter</button>
      </div>
    )
  }
}

export default PureCounter
