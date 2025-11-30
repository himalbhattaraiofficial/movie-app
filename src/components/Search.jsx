import Searchsvg from '../assets/search.svg'
const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src={Searchsvg} />
        <input
         type="text" 
         placeholder='Search through thousand of movies'
         value={searchTerm}
         onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search