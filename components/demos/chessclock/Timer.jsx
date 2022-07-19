import React, { useEffect } from 'react'

import styles from './Timer.module.css'

import FullTag from '../../FullTag'
import { formatTimer } from '../../../utils/utils'

const Timer = (props) => {
	const {
		id,
		name,
		activeTimer,
		activePlayer,
		handleTimerClick,
		timer,
		decreaseTimer,
	} = props

	useEffect(() => {
		console.log('running useEffect')
		if (activeTimer === id) {
			const clock = setInterval(() => decreaseTimer(id), 1000)
			// cleanup function that runs on component unmount or when the next effect runs (when the activeTimer changes)
			return () => {
				clearInterval(clock)
			}
		}
	}, [activeTimer, id, decreaseTimer])

	return (
		<div className={styles.timer}>
			<FullTag name={'Timer'} />
			<h2>{name}</h2>
			<div className={activePlayer === id ? styles.on : null}>
				<div className={styles.time} onClick={() => handleTimerClick(id)}>
					<p>{formatTimer(timer)}</p>
				</div>
			</div>
		</div>
	)
}

export default Timer
