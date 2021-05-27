import React, { useState, useEffect } from 'react'
import GridAnime from '../components/GridAnime'

const AxiosAnime = () => {

    const [ data, setData ] = useState([])


    useEffect(() => {
        getData()
    },[])


    const getData = async () => {
        const url = 'https://kitsu.io/api/edge/anime'
        const resp = await fetch( url )
        const { data } = await resp.json()

        const anime = data.map( img => {
            return {
                id: img.id,
                img: img.attributes.posterImage.medium,
                title: img.attributes.slug
            }
        })

        console.log(anime)
        setData(anime)

    }


    return (
        <div className="list-container">
            {
                data.map( content => (
                    <GridAnime
                        key={content.id}
                        {...content}
                    />
                ))
            }
        </div>
    )
}

export default AxiosAnime
