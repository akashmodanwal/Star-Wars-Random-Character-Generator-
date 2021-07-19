import React from 'react';

class Items extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            clicks: 0,
            remainingClicks: 100
        }
    }

    clickMe(){
        this.setState({
            clicks: this.state.clicks + 1,
            remainingClicks: this.state.remainingClicks - 1
        })
    }
    render(){
      return (
          <div>
                <h3 onClick={() => this.clickMe()}>Buy {this.props.name}</h3>
                <span>{this.state.clicks} {this.props.name} bought, {this.state.remainingClicks} {this.props.name} left</span>
          </div>
      )
    }
  }
  
export default Items;