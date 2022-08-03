import React, { useState } from 'react'
import styles from './App.module.css'

import FullTag from '../../layout/demos/FullTag'

import Table from './Table'

const App = () => {
	const [table, setTable] = useState({ format: 2, isCreated: false })

	const deleteHandler = () => {
		setTable({ format: 2, isCreated: false })
	}

	return (
		<div className={styles.app}>
			<FullTag name={'App'} />
			<div className={styles.container}>
				{table.isCreated ? (
					<Table format={table.format} deleteTable={deleteHandler} />
				) : (
					<div className={styles.panel}>
						<button
							onClick={() => setTable({ format: 2, isCreated: true })}
							className='btn'
						>
							Create 2x2 table
						</button>
						<button
							onClick={() => setTable({ format: 3, isCreated: true })}
							className='btn'
						>
							Create 3x3 table
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
