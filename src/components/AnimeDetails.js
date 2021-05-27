import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AnimeDetails = () => {

    const {id} = useParams()

    const [ details, setDetails ] = useState([])

    useEffect(() =>{
        const getDetails = async () => {
            const urlDetails = `https://kitsu.io/api/edge/anime/${id}`
            const resp = await fetch(urlDetails)
            const { data } = await resp.json()

            console.log(data)
            setDetails(data)
        }

        getDetails()
    }, [id])

    return (
        <div>
            <p>{details.attributes?.slug}</p>
            <img src={details.attributes?.coverImage?.large} alt={details.abbreviatedTitles}/>
            <p>{details.attributes?.description}</p>
        </div>
    )
}

export default AnimeDetails
