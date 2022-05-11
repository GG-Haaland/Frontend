import React, { useState, useEffect} from 'react'
import { SliderData } from '../components/SliderData'
import ImageSlider from '../components/ImageSlider'
import '../style/home.css'
import axios from 'axios'

import Users from '../components/Users'

const Home = () => {
//   let navigate = useNavigate()


  

  return (
    <div>
      {/* <ImageSlider slides={SliderData} /> */}
      <Users />

   
    </div>
  )
}

export default Home