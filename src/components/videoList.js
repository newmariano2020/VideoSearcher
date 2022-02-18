import React from "react";
import Videoitems from "./videoItems";


const Videolist = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return ( 
        <Videoitems key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>)
        ;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
};
    export default Videolist;
