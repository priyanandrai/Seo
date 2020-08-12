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
            </div>
        )
    }
}

export default SubmitRequest;
