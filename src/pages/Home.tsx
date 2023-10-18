import React from 'react'
import Announcement from '../components/Announcement'
import Navbars from '../components/Navbars'
import { ImagesBanner } from '../components/ImagesBanner'
import { Carousal } from '../components/Carousal'

interface Homeprops{

}

const Home: React.FC<Homeprops> = () => {
  return (
    <div>
        <Announcement/>
        <Navbars/>
        <ImagesBanner/>
        <Carousal/>
    </div>
  )
}

export default Home
