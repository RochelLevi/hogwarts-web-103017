import React from 'react'


const DetailedHogCard = (props) => {


  return (
    <div className="ui eight wide column">
    <p>{props.hog.name}</p>
    <p>This Hog is {props.hog.greased ? "Greased" : "Not Greased"}</p>
    <p>Weight: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
    <p>Highest Medal Achieved: {props.hog['highest medal achieved']}</p>
    <button onClick={props.toggleCard}>Exit Details View </button>
    </div>
  )
}


export default DetailedHogCard
