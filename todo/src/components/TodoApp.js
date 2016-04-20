/**
 * Created by student1 on 4/18/2016.
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
            <center>
           <div>
            <i><h1><font color="orange">Welcome to ReactJS</font></h1></i>
            <strong>Enter your name</strong><br/>
            <form>
            <input type="text" onChange={this.onChange.bind(this)}/>
            </form>
            <br/>
            <strong>My name is: {this.state.name}</strong>
           </div>
           </center>
    )
    }
}
