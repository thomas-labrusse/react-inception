import React, { useState } from 'react'

import styles from './Child.module.css'

import ComponentTag from '../../layout/demos/ComponentTag'
import { Renders } from '../../layout/demos/Renders'

const Child = () => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount((prev) => prev + 1)
	}
	return (
		<div className={styles.child}>
			<ComponentTag name={'Child'} />
			<Renders />
			<div className={styles['counter-container']}>
				<button onClick={handleClick} className='btn'>
					Increment
				</button>
				<span className={styles.number}>{count}</span>
			</div>
		</div>
	)
}

export default Child
