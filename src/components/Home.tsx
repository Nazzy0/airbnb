import frame1 from "../assets/frame1.png"
import frame2 from "../assets/frame2.png"
import frame3 from "../assets/frame3.png"
import frame4 from "../assets/frame4.png"
import frame5 from "../assets/frame5.png"
import frame6 from "../assets/frame6.png"
import frame7 from "../assets/frame7.png"
import frame8 from "../assets/frame8.png"
import frame9 from "../assets/frame9.png"
import frame10 from "../assets/frame10.png"
import frame11 from "../assets/frame11.png"
import frame12 from "../assets/frame12.png"
import frame13 from "../assets/frame13.png"
import frame14 from "../assets/frame14.png"
import frame15 from "../assets/frame15.png"
import frame16 from "../assets/frame16.png"
import frame17 from "../assets/frame17.png"
import frame18 from "../assets/frame18.png"
import frame19 from "../assets/frame19.png"
import frame20 from "../assets/frame20.png"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

function Home() {
  const arrayData = {
    img: [
      frame1, frame2, frame3, frame4, frame5, frame6,
      frame7, frame8, frame9, frame10, frame11, frame12,
      frame13, frame14, frame15, frame16, frame17,
      frame18, frame19, frame20
    ],
    txt: "Half Moon Bay, California , US",
    txtBeach: "Beach and ocean views",
    txtPrice: "€1,634",
    txtDate: "22-27 Oct • Individual Host"
  }

 
  const [isLarge, setIsLarge] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

 
  const [emblaRef] = useEmblaCarousel(
    { loop: false, align: "start" },
    [Autoplay()]
  )

  return (
    <>
   
      {!isLarge && (
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {arrayData.img.map((datas, index) => (
              <div
                className="embla__slide shrink-0 w-[80%] sm:w-[50%] md:w-[33%] px-2"
                key={index}
              >
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={datas}
                    alt={`Slide ${index}`}
                    className="w-full h-60 object-cover"
                  />
                </div>
                <div className="mt-2">
                  <p className="font-semibold">{arrayData.txt}</p>
                  <p className="text-gray-500 text-sm">{arrayData.txtBeach}</p>
                  <p className="text-gray-500 text-sm">{arrayData.txtDate}</p>
                  <p className="border-b-2 inline-block">
                    <span className="font-semibold">{arrayData.txtPrice}</span> total
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

   
      {isLarge && (
        <div className="grid grid-cols-4 gap-6 px-6">
          {arrayData.img.map((datas, index) => (
            <div key={index}>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={datas}
                  alt={`Grid ${index}`}
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="mt-2">
                <p className="font-semibold">{arrayData.txt}</p>
                <p className="text-gray-500 text-sm">{arrayData.txtBeach}</p>
                <p className="text-gray-500 text-sm">{arrayData.txtDate}</p>
                <p className="border-b-2 inline-block">
                  <span className="font-semibold">{arrayData.txtPrice}</span> total
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

    
      <div className="flex flex-col justify-center items-center gap-3 m-10">
        <p className="text-xl font-semibold text-center">
          Continue exploring amazing views
        </p>
        <button className="bg-black text-white rounded-xl py-3 px-6 hover:bg-gray-800 transition">
          Show more
        </button>
      </div>
    </>
  )
}

export default Home