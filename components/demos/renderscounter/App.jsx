import React, { useState } from 'react'
import ComponentTag from '../../layout/demos/ComponentTag'
import Child from './Child'

import styles from './App.module.css'

import { Renders } from '../../layout/demos/Renders'

const App = () => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount((prev) => prev + 1)
	}
	return (
		<div className={styles.app}>
			<ComponentTag name={'App'} />
			<Renders />
			<div className={styles['counter-container']}>
				<button onClick={handleClick} className='btn'>
					Increment
				</button>
				<span className={styles.number}> {count}</span>
			</div>
			<Child />
		</div>
	)
}

export default App
