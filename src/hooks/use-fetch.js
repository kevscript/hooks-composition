import { useState, useEffect } from 'react'

export const useFetch = (url, options) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setData(json)
        setLoading(false)
        console.log(json)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [options, url])

  return { loading, error, data }
}