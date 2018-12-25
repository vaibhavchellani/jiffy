import React, { Component } from 'react';

class TitleDivider extends Component {
    state = {  }
    render() { 
        return ( <div className="title-divider mb-4 pt-3 d-flex">
            <div className="flex-grow-1">{this.props.title}</div>
            <div className="more pl-2">{this.props.more}</div>
        </div> );
    }
}
 
export default TitleDivider;