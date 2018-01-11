import React from 'react'
import DetailedHogCard from './DetailedHogCard'
import HogCard from './HogCard'






class ToggleableHogCard extends React.Component {

  constructor() {
    super();

    this.state = {
      showDetails: false
    }
  }

  toggleCard = () => {
    this.setState({showDetails: !this.state.showDetails})
  }

  render(){
    return (<div> {this.state.showDetails ? <DetailedHogCard hog={this.props.hog} toggleCard={this.toggleCard}/> : <HogCard hog={this.props.hog} toggleCard={this.toggleCard}/>} </div>)
  }

}



export default ToggleableHogCard
