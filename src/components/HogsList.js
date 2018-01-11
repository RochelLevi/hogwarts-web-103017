import React from 'react'
import ToggleableHogCard from './ToggleableHogCard'

const HogsList = (props) => {
  console.log(props.currentPigs)
  return (
    <div>
    {props.currentPigs.map(p =>
      <ToggleableHogCard hog={p} />
    )}
    </div>
  )
}

export default HogsList
