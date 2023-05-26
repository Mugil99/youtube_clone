const VideoPlay=({video})=>{
    console.log(video);
    return(
        <div>
            {
                video==null ?<h1>Loading...</h1>:(
                    <>
                    <iframe width="95%" height="515" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
                    <h1>{video.snippet.title}</h1>
                    <p>{video.snippet.description}</p>
                    <h3>{video.snippet.channelTitle}</h3>
                    
                    </>
                )

            }
        </div>
    )
}
export default VideoPlay;