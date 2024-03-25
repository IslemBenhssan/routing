import React from 'react'
import { useParams } from 'react-router-dom'

function Info({movie}) {
    console.log(movie)
    const{id}= useParams()
    //console.log(id)
  const list=movie.find(el=>el.id==id)
  return (
    <div>
    <img src={list.image} alt=""   style={{ border: "1px solid black",width: "400px", height: "400px",marginright: "auto" }}/>
    <h1>{list.name}</h1>
    <p>{list.date}</p>
    <h3>Rating : {list.rating}</h3>
    <iframe width="798" height="449" src={list.video} title="list.name" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Info