import piggy from '../porco.png';
import React from 'react';

const NavAndFilter = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span> <br/>

    <span className="filter">
      <input id="showGreased" type="checkbox" checked={props.showGreased} onChange={props.greasedClick} /> Show Greased Hogs <br/>
      <input id="showUnGreased" type="checkbox" checked={props.showUnGreased} onChange={props.unGreasedClick} />  Show UnGreased Hogs <br/>
      Sort by:
      <select onChange={props.changeSort} value={props.sortByName ? "name" : "weight"} >
        <option value="name">Name</option>
        <option value="weight">weight</option>
      </select>
    </span>
  </div>
  )
}

export default NavAndFilter
