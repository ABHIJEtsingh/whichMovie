import { useEffect , useState } from "react";


const Hero =()=>{

    const [movieList,setMovieList] = useState([]);

    const [searchResult,setSearchResult] = useState('');

    useEffect(()=>{
        getMovies();
    },[])

    const getMovies = async ()=>{
        const data = await fetch(`https://www.omdbapi.com/?s=${searchResult}&apikey=a219683e`);
        const json = await data.json();
        setMovieList(json?.Search);
        console.log(movieList?.Search);
    }

    return(
        <div>
            <h1>Which Movie Do You Want</h1>
            <div style={{display:"flex", justifyContent:"center", margin:"10px", padding:"10px" }} >
                <div>
                    <input type="text"  value={searchResult} onChange={(e)=>{
                        setSearchResult(e.target.value)
                        getMovies();
                    }} placeholder="search movie.." />
                    <button type="submit" style={ 
                        {width:"60px", height:"30px", padding:"5px", margin: "5px" } }
                         onClick={()=>{
                           const result = getMovies();
                           setMovieList(result?.[0]?.search);
                           console.log( result);
                         }} >Search</button>
                </div>
            </div>
                    <div style={{display:"flex", flexWrap:"wrap", margin:"10px", justifyContent:"center"}}>
                        {
                            movieList?.map((movie)=>{
                                return(
                                    <div key={movie.imdbID} style={{margin:"10px"}} > 
                                        <img src={movie.Poster} style={{width:"200px", height:"300px"}} />
                                        <p style={{width:"200px"}} >{movie.Title}</p>
                                        <a href={`/details/${movie.imdbID}`} >Details</a>
                                    </div>
                                )
                            })
                        }
                       </div> 
        </div>
    )
}

export default Hero;