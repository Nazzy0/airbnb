import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

function Home() {

  const [data, setData] = useState<Product[]>([])

  const [isLarge, setIsLarge] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  type Product = {
  img: string
}


   const dataofjson = {
    txt: "Half Moon Bay, California, US",
    txtBeach: "Beach and ocean views",
    txtPrice: "€1,634",
    txtDate: "22-27 Oct • Individual Host"
   }

   console.log("dataofjson:", dataofjson)


  useEffect(()=> {
     fetch('https://nazzy0.github.io/api.json')
      .then(response => response.json())
      .then(json => (
        setData(json)
      ))
      .catch((err) => console.error(err));

  }, [])


   if (!data) return <p>Loading...</p>;

 
  const [emblaRef] = useEmblaCarousel(
    { loop: false, align: "start" },
    [Autoplay()]
  )

  return (
    <>
   
      {!isLarge && (
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {data.map((datas, index) => (
              <div
                className="embla__slide shrink-0 w-[80%] sm:w-[50%] md:w-[33%] px-2"
                key={index}
              >
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={datas.img}
                    alt={`Slide ${index}`}
                    className="w-full h-60 object-cover"
                  />
                </div>
                <div className="mt-2">
                  <p className="font-semibold">{dataofjson.txt}</p>
                  <p className="text-gray-500 text-sm">{dataofjson.txtBeach}</p>
                  <p className="text-gray-500 text-sm">{dataofjson.txtDate}</p>
                  <p className="border-b-2 inline-block">
                    <span className="font-semibold">{dataofjson.txtPrice}</span> total
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

   
      {isLarge && (
        <div className="grid grid-cols-4 gap-6 px-6 pt-4">
          {data.map((datas, index) => (
            <div key={index}>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={datas.img}
                  alt={`Grid ${index}`}
                  className="w-full h-60 object-cover"
                />

              </div>
              <div className="mt-2">
                <p className="font-semibold">{dataofjson.txt}</p>
                <p className="text-gray-500 text-sm">{dataofjson.txtBeach}</p>
                <p className="text-gray-500 text-sm">{dataofjson.txtDate}</p>
                <p className="border-b-2 inline-block">
                  <span className="font-semibold">{dataofjson.txtPrice}</span> total
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