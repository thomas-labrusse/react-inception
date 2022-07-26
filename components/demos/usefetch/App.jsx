import React, { useState } from 'react'

import styles from './App.module.css'
import FullTag from '../../layout/demos/FullTag'

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
		<div className={styles.app}>
			<FullTag name={'App'} />
			<div className={styles.container}>
				<div className={styles.panel}>
					<span>{Urls[index]}</span>
					<div>
						<span>{loading && 'loading'}</span>
					</div>
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
				</div>
				<div className={styles['pre-container']}>
					{data && <pre>{JSON.stringify(data, null, 4)}</pre>}
				</div>
			</div>
		</div>
	)
}

export default App
