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
            mytodo:'',
            list:[
                'vote duterte',
                'kill lagarthree'
            ]
        };
        //this.onChange = this.onChange.bind(this);
    }
    
onChange(e){
    this.setState({
        mytodo:e.target.value
    })
};
 
 onAddItem(){
     var listx = this.state.list;
     listx.push(this.state.mytodo);
     
     this.setState({
         list:listx
     })
 }
    onKeyUp(e){
        if(e.key==='Enter')
        {
             let tmp = this.state.list;
             tmp.push(this.state.mytodo);
             this.setState({
                 list:tmp,
                 mytodo:''
             });
        }
        
    }
    
    
    render(){   
        let items=[];    
        for (var i=0;i< this.state.list.length;i++){
           items.push(<li>{this.state.list[i]}</li>);
        }

        return (
            
            <div>
            
            <h1> My todo List </h1>
            <input type="text" 
            
                    onChange={this.onChange.bind(this)}
                    value={this.state.mytodo}
            onKeyUp={this.onKeyUp.bind(this)}
            />
            
           
             <ol>
             {items}
             </ol>
            </div>
             
        )
    }
}

