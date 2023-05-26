import React,{useEffect} from "react";

const VideoList=({videos,videoChosen})=>{
    useEffect(()=>{
        videoChosen(videos[0])
    },[videos])
    return(
        <div>
            {
                videos && videos.map((video,index)=>(
                    <div key={index}
                    onClick={()=>videoChosen(video)}>
                    
                    <img style={{width:"100%"}}
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    />
                    <h4 style={{margin:"0px"}}>{video.snippet.title}</h4>
                    <p style={{marginTop:"0px"}}>{video.snippet.channelTitle}</p>
                </div>
                ))
            }
            
        </div>
    )
}
export default VideoList;