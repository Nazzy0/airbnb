import imgSearch from "../assets/top_search.png";

function SearchBar() {
  return (
    <div>
      <div className='flex items-center gap-3 border-2 rounded-full border-amber-100 px-4 py-2 shadow-sm hover:shadow-md transition'>
        <p>Anywhere</p>
        <p>Any week</p>
        <input className='text-gray-400 border border-gray-300 rounded' type="text" id='gName' placeholder='Add guest'/>
        <img className='w-5 h-5' src={imgSearch} alt="Search Icon" />
      </div>
    </div>
  )
}

export default SearchBar