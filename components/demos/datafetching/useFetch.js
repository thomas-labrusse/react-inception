import { useState, useEffect } from 'react'

export const useFetch = (options) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		setLoading(true)
		console.log('loading true')
		// avoiding race condition (first fetch takes longer than second for instance)
		let isCancelled = false
		if (!isCancelled) {
			fetch(options.url)
				.then((res) => res.json())
				.then((parsedData) => setData(parsedData))
				.catch((err) => setError(err))
				.finally(() => setLoading(false))
		}
		return () => {
			isCancelled = true
		}
	}, [options.url])

	return { data, loading, error }
}
