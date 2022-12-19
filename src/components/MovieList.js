const MovieList = ({movies, AddOrRemoveFavorites, handleButtonClick}) => {

    return(
        /*reason why you need the empty <> is for bootstrap to work. Since I applied
        the bootstrap styling in App.js parent div, it then gets applied to the child
        elements here. If I added a div here, I'd then have to add the styling here for
        it to get applied to the children*/ 
        <>
            {movies.map((movie) =>
                <div className="image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt="movie"/>
                    
                    {/*If user clicks on the div of the movie, then call handleFavoriteClick and pass in the movie they clicked on*/}
                    <div 
                      className="overlay d-flex allign-items-center justify-content-center"
                      onClick={() => handleButtonClick(movie)}
                    >
                        <AddOrRemoveFavorites/>
                
                    </div>
                </div>
            )}
        </>
    )
 }
  
 export default MovieList;