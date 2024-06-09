import React from 'react';
import {Link} from 'react-router-dom';
import Bannerimage from '../assets/pizza.jpeg';
import '../Components/Styles/home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${Bannerimage})` }}>
      <div className='headerContainer' >
        <h1>Pedro's Pizza</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to='/Menu'>
        <button>
          ORDER NOW
        </button>
        </Link>
       
      </div>
    </div>
  )
}

export default Home
