// import React from 'react'

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
import nextbtn from "../assets/next_btn.png"


function SecondTop() {
   let objData = [{
      img: amazingView,
      name: "Amazing views"
    },{
     img: cabins,
      name: "Cabins" 
    },{
    img: beachFront,
    name: "Beachfron"
  },{
    img: Skiings,
    name: "Skiing"
  },{
    img: grandPianos,
    name: "Grand pianos"
  },{
    img: mansions,
    name: "Mansions"
  },{
    img: omg,
    name: "OMG!"
  },{
    img: amazingPool,
    name: "Amazing pools"
  },{
    img: luxe,
    name: "Luxe"
  },{
    img: boats,
    name: "Boats"
  },{
    img: lakeFront,
    name: "Lakefront"
  },{
    img: treehouse,
    name: "Treehouse"
  },{
    img: nextbtn
  },{
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNldHRpbmdzMi1pY29uIGx1Y2lkZS1zZXR0aW5ncy0yIj48cGF0aCBkPSJNMTQgMTdINSIvPjxwYXRoIGQ9Ik0xOSA3aC05Ii8+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMyIvPjxjaXJjbGUgY3g9IjciIGN5PSI3IiByPSIzIi8+PC9zdmc+",
    name: "Filters"
  }

]
  return (
    <>


 <div className="flex items-center gap-5">
   {objData.map((stored, i)=> (
    <div className="flex flex-col items-center" key={i}>
      <img src={stored.img} alt="" />
      <p>{stored.name}</p>
    </div>
   ))}

   </div>

    </>
  )
}

export default SecondTop