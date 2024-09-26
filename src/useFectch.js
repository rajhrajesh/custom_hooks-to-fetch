import React, { useEffect, useState } from 'react'

const uri = 'https://api.github.com/users/rajhrajesh'

export const useFetch = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        if (!uri) return;
        fetch(uri).then((response) => response.json()).then(setData).then(() => setLoading(false)).catch(setError)

    }, [uri])

    return { data, loading, error }

}