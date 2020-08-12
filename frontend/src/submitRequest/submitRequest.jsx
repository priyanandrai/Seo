import React, { Component } from 'react'

export class SubmitRequest extends Component {
    constructor(){
        super()
    }
    submitrequest(){

    }
    render() {
        return (
            <div>
                <a class="dropdown-item" onClick={this.submitrequest}></a>
                <h1 style={{marginTop: '20%'}}>hello meemes</h1>
            </div>
        )
    }
}

export default SubmitRequest;
