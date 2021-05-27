import React from 'react'

const GridAnime = ({id, img, title}) => {

    console.log( id, img)

    return (
        <>
            <div className="container-grid">
                <a href="#" className="card">
                    <p>{title}</p>
                    <img src={img} alt={title}/>
                </a>
            </div>
        </>
    )
}

export default GridAnime
