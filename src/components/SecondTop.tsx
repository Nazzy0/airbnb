import React from 'react'
import amazingView from "../assets/amazing_views.png"
import cabins from "../assets/cabins.png"
import beachFront from "../assets/beachfronts.png"
import Skiings from "../assets/skiing.png"
import grandPianos from "../assets/grand_pianos.png"
import mansions from "../assets/mansions.png"
import omg from "../assets/omg.png"
import amazingPool from "../assets/amazing_pools.png"
import luxe from "../assets/luxe.png"
import boats from "../assets/boats.png"
import lakeFront from "../assets/lakefrontt.png"
import treehouse from "../assets/treehouses.png"
import { CircleChevronRight, Settings2 } from 'lucide-react'

function SecondTop() {
  return (
    <>

    <div className='flex items-center gap-5 m-5'>
        <div>
         <img src={amazingView} alt="" />
         <p>Amazing views</p>
        </div>

      <div>
        <img src={cabins} alt="" />
        <p>Cabins</p>
      </div>

      <div><img src={beachFront} alt="" />
      <p>Beachfront</p></div>


      <div>
        <img src={Skiings} alt="" />
        <p>Skiing</p>
      </div>


      <div>
        <img src={grandPianos} alt="" />
        <p>Grand pianos</p>
      </div>


      <div>
        <img src={mansions} alt="" />
        <p>Mansions</p>
      </div>


      <div>
        <img src={omg} alt="" />
        <p>OMG!</p>
      </div>


      <div>
        <img src={amazingPool} alt="" />
        <p>Amazing pools</p>
      </div>


      <div>
        <img src={luxe} alt="" />
        <p>Luxe</p>
      </div>


      <div>
        <img src={boats} alt="" />
        <p>Boats</p>
      </div>

      <div>
        <img src={lakeFront} alt="" />
        <p>Lakefront</p>
      </div>


      <div>
        <img src={treehouse} alt="" />
        <p>Treehouse</p>
      </div>


      <div>
        <CircleChevronRight/>
      </div>

      <div className='flex bg-transparent'>
        <Settings2/>
        <p>Filters</p>
      </div>


      </div>

    </>
  )
}

export default SecondTop