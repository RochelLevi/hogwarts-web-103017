Import React from 'react'

class ToggleableHogCard extends React.component{
  constuctor(){
    super()

    this.state = {
      showDetails: false
    }
  }

  toggleCard = () => {
    this.setState({showDetails: !this.state.showDetails})



  }

  render(){
    <div> {showDetails ? <DetailedHogCard hog={this.props.hog}/> : <HogCard hog={this.props.hog}/>} <div/>
  }

}



export default ToggleableHogCard
