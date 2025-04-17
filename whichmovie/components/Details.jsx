import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

const Details = () => {
    const [details, setDetails] = useState(null);
    const {imdbID }= useParams();
    

    useEffect(()=>{
        getDetails();
    },[])
    const getDetails = async()=>{
        const data = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=a219683e`);    
        const json = await data.json();
        setDetails(json);
        console.log(json)
    }
    return details==null ? <h1>Loading...</h1> : <div>
            <h1>Details</h1>
        <div style={{display:"flex", margin:"10px"}} > 
        <img src={details.Poster} />
        <div style={{margin:"10px"}}>
        <h2>Title-{details.Title}</h2>
        <h2>Year-{details.Year}</h2>
        <h2>Genre-{details.Genre}</h2>
        <h2>Actors-{details.Actors}</h2>
        </div>
        </div>
    </div>
}   

export default Details