/**
 * Created by student1 on 4/18/2016.
 */
import React from 'react';

export default  class TodoApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            mytodo:'',
            'list':[
                'Vote Duterte',
                'Kill Corruption'
            ]
        };
        //this.onChange = this.onChange.bind(this);
                      }
        onKeyUp(e){
            if(e.key==="Enter")
            {
                let tmp = this.state.list;
                tmp.push(this.state.mytodo);
                this.setState({
                    list:tmp,
                    mytodo:''
                });
            }
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
            
        
    render(){

        let items = [];
        {
        for(var i=0;i<this.state.list.length;i++)
        {
            items.push(<li>{this.state.list[i]}</li>);
        }
        }
        
        return (
        
           <div>
            <i><h1><font color="orange">My todo-list</font></h1></i>
            <input type="text" 
            onChange={this.onChange.bind(this)} 
            onKeyUp={this.onKeyUp.bind(this)}
            placeholder="What needs to be done?"
            value={this.state.mytodo}
            autoFocus={true}/>
            <ol>
             {items}
            </ol>
           </div>
        
                )
    }
}
