import React, { Component } from 'react';

class denemeComponent extends Component{
      
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.name);
        return(
            <div>
                <h1>
        CHILD COMPONENT `{'>'}`  {this.props.name}
                </h1>
               
            </div>
        )
    }
}

export default denemeComponent;