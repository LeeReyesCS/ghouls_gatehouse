import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import './Home.css'

const Home = () => {
  return (
  <div>
    <div className='content'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='about-me'>
        AJ Martin has received her B.A. in English with a minor in creative writing from California State University, Chico and is currently a candidate for a M.A. in English literature with a dual emphasis in rhetoric and composition at California State Polytechnic University, Pomona. AJ also works as a college English tutor during the week and as a children’s creative writing teacher on weekends. She currently writes stand alone poems, but also has two works in progress including a novel and a novel written in verse. In her free time AJ enjoys playing video games, reading, and traveling. She now lives in California with her incredible partner and their dog Luna. 
      </div>
    </div>
    <div class="bird-container bird-container--one">
      <div class="bird bird--one"></div>
    </div>

    <div class="bird-container bird-container--two">
      <div class="bird bird--two"></div>
    </div>

    <div class="bird-container bird-container--three">
      <div class="bird bird--three"></div>
    </div>

    <div class="bird-container bird-container--four">
      <div class="bird bird--four"></div>
    </div>
  </div>)
}

export default Home