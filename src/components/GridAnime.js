import React from 'react'
import { Link } from 'react-router-dom'

const GridAnime = ({id, img, title}) => {

    return (
        <div className="container-grid">
            <Link to={`/details/${id}`} className="card">
                <p>{title}</p>
                <img src={img} alt={title}/>
            </Link>
        </div>
    )
}

export default GridAnime
