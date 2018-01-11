import React from 'react'
import hogs from '../porkers_data.js'

import Augustus_Gloop from '../hog-imgs/augustus_gloop.jpg';
import Bay_Of_Pigs from '../hog-imgs/bay_of_pigs.jpg';
import Cherub from '../hog-imgs/cherub.jpg';
import Galaxy_Note from '../hog-imgs/galaxy_note.jpg';
import Leggo_My_Eggo from '../hog-imgs/leggo_my_eggo.jpg';
import Mudblood from '../hog-imgs/mudblood.jpg';
import Piggy_Smalls from '../hog-imgs/piggy_smalls.jpg';
import Porkchop from '../hog-imgs/porkchop.jpg';
import Rainbowdash from '../hog-imgs/rainbowdash.jpg';
import Sobriety from '../hog-imgs/sobriety.jpg';
import The_Prosciutto_Concern from '../hog-imgs/the_prosciutto_concern.jpg';
import Trouble from '../hog-imgs/trouble.jpg';
import Truffleshuffle from '../hog-imgs/truffleshuffle.jpg';

//const myName = "augustus_gloop"

//import "augustus_gloop" from '../hog-imgs/augustus_gloop.jpg';
// let myName = "augustus_gloop"
// import gloopy from '../hog-imgs/{myName}.jpg';
//import augustus_gloop from '../hog-imgs/augustus_gloop.jpg';




const HogCard = (props) => {
  let images = {
      augustus_gloop: Augustus_Gloop,
      bay_of_pigs: Bay_Of_Pigs,
      cherub: Cherub,
      galaxy_note: Galaxy_Note,
      leggo_my_eggo: Leggo_My_Eggo,
      mudblood: Mudblood,
      piggy_smalls: Piggy_Smalls,
      porkchop: Porkchop,
      rainbowdash: Rainbowdash,
      sobriety: Sobriety,
      the_prosciutto_concern: The_Prosciutto_Concern,
      trouble: Trouble,
      truffleshuffle: Truffleshuffle
  };
  //get img path
 //  let hogPath = '../src/hog-imgs/' + props.hog.name.toLowerCase().replace(' ', '_')
 // + '.jpg'


  return(
    <div className='ui-cards'>

      <a class="image" href="#">
        <img src={images[props.hog.name.toLowerCase().replace(/ /g, '_')]} />
      </a>

      <div class="content">
        <a class="header" href="#">{props.hog.name}</a>
      </div>

      <div class="ui bottom attached button">
        <i class="add icon"></i>
        See Details
    </div>

    </div>
  )




}


export default HogCard
