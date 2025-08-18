// import React from 'react'

function Footer() {
  let names = ["Popular","Historic","Coastal","Islands","Lakes","Unique stays","Categories", "Things to do"]
  return (
    <div>

    <footer className='bg-[#F7F7F7]'>
      <div>
      <h1 className='font-bold'>Inspiration for future getaways</h1>
      <div className='flex gap-3'>
       {names.map((store)=>(
      <p className='text-gray-400 font-semibold'>{store}</p>
       ))}
      </div>


  <div className="lg:flex md:flex">
     <div className="gird grid-cols-1 space-x-7 pl-5">
      <h2 className="font-semibold">Support</h2>
      <ul>
        <li>Help Center</li>
        <li>AirCover</li>
        <li>Anti-discrimination</li>
        <li>Disability support</li>
        <li>Cancellation options</li>
        <li>Report neighborhood concern</li>
      </ul>
     </div>
     <hr />
     <div className="grid grid-cols-1 space-x-7 pl-5">
      <h2 className="font-semibold">Hosting</h2>
      <ul>
        <li>Airbnb your home</li>
        <li>Airbnb your experience</li>
        <li>Airbnb your service</li>
        <li>AirCover for Hosts</li>
        <li>Hosting resources</li>
        <li>Community forum</li>
        <li>Hosting responsibly</li>
        <li>Airbnb-friendly apartments</li>
        <li>Join a free Hosting class</li>
        <li>Find a co-host</li>
      </ul>
     </div>
     <div></div>

     </div>

      </div>
    </footer>


    </div>
  )
}

export default Footer