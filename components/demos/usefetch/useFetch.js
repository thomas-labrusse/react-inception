import { useState, useEffect, useCallback } from 'react'

export const useFetch = (options) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchData = useCallback(() => {
		setLoading(true)
		fetch(options.url)
			.then((res) => res.json())
			.then((parsedData) => setData(parsedData))
			.catch((err) => setError(err))
			.finally(() => setLoading(false))
	}, [options.url])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	const resetError = () => setError(null)

	return { data, loading, error, resetError, fetchData }
}
