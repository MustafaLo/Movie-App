const Search = ({search, setSearch}) => {
  return (
      <div className="col col-sm-4">
         <input 
         className="form-control" 
         placeholder="Type to Search"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         
         ></input>
      </div>
  )  
}

export default Search;