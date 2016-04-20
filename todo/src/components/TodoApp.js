/**
 * Created by 0614-3625-cect on 4/18/2016.
 */
/**
 * Created by albertoclarit on 4/18/16.
 */
import React from 'react';

export default  class TodoApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'Student'
        }
        //this.onChange = this.onChange.bind(this);
    }
    
onChange(e){
    this.setState({
        name:e.target.value
    })
}
 
    render(){

        return (
            
            <div>
            <center><h1>Welcome to ReactJS </h1>
                  <h1>I Love Being IT!</h1>
                  <font color="red"><h2>{this.state.name}</h2></font>
                  <h2><strong>Enter Your Name:</strong></h2>
                  <form>
                  <input type="text" onChange={this.onChange.bind(this)}/>
                  </form>
                  </center>
             </div>
             
    )
    }
}