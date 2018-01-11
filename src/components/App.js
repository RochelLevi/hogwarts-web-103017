import React, { Component } from 'react';
import '../App.css';
import NavAndFilter from './NavAndFilter'
import hogs from '../porkers_data.js'
import HogsList from './HogsList'

class App extends Component {

  constructor(){
    super()

    this.state = {
      currentPigs: hogs.sort((a,b) => this.sortCallBack(a,b)),
      sortByName: true,
      showGreased: true,
      showUnGreased: true
    }

  }

  greasedClick = (event) => {

    this.setState({showGreased: !this.state.showGreased}, this.filterPigs)
  }

  unGreasedClick = (event) => {
    this.setState({showUnGreased: !this.state.showUnGreased}, this.filterPigs)
  }

  filterPigs = () => {
    if (this.state.showGreased && this.state.showUnGreased) {
      this.setState({currentPigs: hogs})
    } else if (this.state.showGreased) {
      const newPigs = hogs.filter(p => p.greased)
      this.setState({currentPigs: newPigs})
    } else if (this.state.showUnGreased) {
      const newPigs = hogs.filter(p => !p.greased)
      this.setState({currentPigs: newPigs})
    } else {
      this.setState({currentPigs: []})
    }
  }

  changeSort = (event) => {
    console.log("sort", event.target.value)
    //this.setState({sortByName: !this.state.sortByName})
  }

  executeSort = () => {
    if (this.state.sortByName) {
      this.setState({currentPigs: this.state.currentPigs.sort(this.sortCallBack)})
    } else {
      //
      this.setState({currentPigs: this.state.currentPigs.sort(p => p["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"])})
      //weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water:
    }
  }
  sortCallBack = (a, b) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }
  }



  render() {
    return (
      <div className="App">
          < NavAndFilter showGreased={this.state.showGreased} showUnGreased={this.state.showUnGreased}
          sortByName={this.state.sortByName}
          greasedClick={this.greasedClick}
          unGreasedClick={this.unGreasedClick}
          changeSort={this.changeSort}
          />
          <HogsList currentPigs={this.state.currentPigs}/>

      </div>
    )
  }
}

export default App;
