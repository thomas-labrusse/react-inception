export const mkdApp = `import React, { useState } from 'react'

import { useFetch } from './useFetch'

const Urls = [
	'http://jsonplaceholder.typicode.com/users/1',
	'https://api.math.tools/numbers/nod',
	'https://x-math.herokuapp.com/api/random',
	'https://not-an-actual-api.com/',
]

const App = () => {
	const [index, setIndex] = useState(0)

	const { loading, data, error, fetchData, resetError } = useFetch({
		url: Urls[index],
	})

	return (
		<div>
			<div className={styles['button-container']}>
				<button
					onClick={() =>
						index === Urls.length - 1
							? setIndex(0)
							: setIndex((prev) => prev + 1)
					}
					className='btn'
				>
					next fetch
				</button>
				<button onClick={() => fetchData()} className='btn'>
					refetch
				</button>
				{error && (
					<>
						<button onClick={resetError} className='btn'>
							reset error
						</button>{' '}
						<span>{error && error.message}</span>
					</>
				)}
			</div>
			<div>
				{data && <pre>{JSON.stringify(data, null, 4)}</pre>}
			</div>
		</div>
	)
}`

export const mkdUseFetch = `import { useState, useEffect, useCallback } from 'react'

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
}`
