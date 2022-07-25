import React, { useState } from 'react'

import styles from './App.module.css'
import FullTag from '../../layout/demos/FullTag'
import UserCard from './UserCard'

import { useFetch } from './useFetch'

const App = () => {
	console.log('App rendering')

	const [id, setId] = useState(1)

	const { loading, data, error } = useFetch({
		url: `http://jsonplaceholder.typicode.com/users/${id}`,
	})

	console.log('Error 💥', error)
	console.log('Loading ⏰', loading)

	return (
		<div className={styles.app}>
			<FullTag name={'App'} />
			<div className={styles.container}>
				<button
					onClick={() => (id === 10 ? setId(1) : setId((prev) => prev + 1))}
					className='btn'
				>
					next user
				</button>
				<p>
					{loading && 'loading'}
					{error && 'error'}
				</p>
				{data && (
					<UserCard
						name={data.name}
						phone={data.phone}
						email={data.email}
						website={data.website}
					/>
				)}
			</div>
		</div>
	)
}

export default App
