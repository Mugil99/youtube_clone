import React,{useState, useEffect} from "react";
import youtube from '../apis/youtube';

const SearchBar=({addVideos})=>{
    const [searchTerm,setSearchTerm]=useState('React Tutorial');

useEffect(()=>{
    getYoutubeVideos()
},[])

function getYoutubeVideos(){
    youtube.get('/search',{
        params:{
            q: searchTerm,
            type: 'video'
        }
    })
    .then((response)=> addVideos(response.data.items))
    .catch((error)=> console.log(error))
}
function handleKeyDown(e){
    if(e.key==='Enter'){
        e.preventDefault();
        getYoutubeVideos();
    }
}
return(
    <div>
        <input type="text" 
        onKeyDown={handleKeyDown}
        onChange={(e)=>setSearchTerm(e.target.value)}
        value={searchTerm}/>
        <button onClick={searchTerm==""?()=>{}:getYoutubeVideos}>Search</button>
    </div>
)
}
export default SearchBar;