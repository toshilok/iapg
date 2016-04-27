/**
 * Created by 0614-3625-cect on 4/18/2016.
 */
/**
 * Created by albertoclarit on 4/18/16.
 */
import React from 'react';
import Todoitem from './Todoitem'

export default  class TodoApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            mytodo:'',
            list:[
                'Vote Duterte',
                'Kill Lagarthree'
            ]
        };
        //this.onChange = this.onChange.bind(this);
    }
    
onChange=(e)=>{
    this.setState({
        mytodo:e.target.value
    })
};
 
 onAddItem=()=>{
     var listx = this.state.list;
     listx.push(this.state.mytodo);
     
     this.setState({
         list:listx
     })
 };
    onKeyUp=(e)=>{
        if(e.key==='Enter')
        {
             let tmp = this.state.list;
             tmp.push(this.state.mytodo);
             this.setState({
                 list:tmp,
                 mytodo:''
             })
        }
        
    };
    
    deleteMe=(index)=>{
    var tmp=this.state.list;
    var newtmp= tmp.splice(index,1);
    this.setState({
        list:tmp
    })
};
    
    
    render(){   
        let items=[];    
        for (var i=0; i<this.state.list.length;i++){
           items.push(<Todoitem key={i}
                                description={this.state.list[i]}
                                index={i}
                                removeMe={this.deleteMe}
                                />);
        }

        return (
          
            <div className="todoapp">
            <h1 className="header"> My todo List </h1>
            <center><input className="prompt" type="text" onChange={this.onChange}
                    value={this.state.mytodo}
                    placeholder="What To do"
            onKeyUp={this.onKeyUp}
            />
            
           
           
             {items}
             
             </center>
            </div>
             
        )
    }
}

