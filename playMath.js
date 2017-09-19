class Button extends React.Component{
	render(){
  	return(
    <button onClick={()=>this.props.onClickFunction(this.props.incrementValue)}> {this.props.op}{this.props.incrementValue}</button>
    )
  }
}
class Result extends React.Component{
  render(){
    return (
    <h2>{this.props.counter}</h2>
    );
  }
}


class App extends React.Component{
  state= {counter:0};
  
  increment=(incrementValue)=>{
		this.setState((prevState)=>({
    
    	counter: prevState.counter+(incrementValue)
    
    }));
	};
  
  decrement=(incrementValue)=>{
  	this.setState((prevState)=>({
    counter: prevState.counter-incrementValue
    }))
  }
  render(){
  return(
  <div>
    <Button incrementValue={1} op={'+'} onClickFunction={this.increment}/>
    <Button incrementValue={5} op={'-'} onClickFunction={this.decrement}/>
    <Button incrementValue={10} op={'-'} onClickFunction={this.decrement}/>
    <Button incrementValue={100} op={'+'} onClickFunction={this.increment}/>
    <Result counter={this.state.counter}/>
  </div>
  )
  }
}

ReactDOM.render(<App />,mountNode)
