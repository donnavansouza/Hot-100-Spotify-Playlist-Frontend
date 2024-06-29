import React from "react"

async function PlaylistCard({playlistId}){
    return(
    <iframe style={{borderRadius: '12px'}} 
      src= {`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`} 
      width="60%" 
      height="352" 
      frameBorder="0" 
      allowFullScreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy">
    </iframe>
    )
}

export default PlaylistCard;