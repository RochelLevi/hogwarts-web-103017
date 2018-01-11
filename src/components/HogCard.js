import React from 'react'

const HogCard = (props) => {

  //get img path
  let hogPath = '/src/hog-imgs/' + props.hog.name.toLowerCase().replace(' ', '_')
 + '.jpg'



  return(
    <div>
    <p>{props.hog.name}</p>
    <img src={hogPath} />

    ..

    </div>
  )




}


export default HogCard
