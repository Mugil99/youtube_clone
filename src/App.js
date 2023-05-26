import React,{useState} from "react";
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoPlay from './Components/VideoPlay';
const App=()=>{
  const[videos,setVideos]=useState([]);
  const [selectedVideo,setSelectedVideo]=useState(null);

  return(
    <div>
      <SearchBar addVideos={setVideos}/>
      <div style={{display:"flex"}}>
           <div style={{width:"65vw"}}>
              <VideoPlay video={selectedVideo}/>
           </div>
           <div style={{width:"35vw"}}>
              <VideoList videos={videos} videoChosen={setSelectedVideo}/>
           </div>
      </div>
    </div>
  )
}
export default App;