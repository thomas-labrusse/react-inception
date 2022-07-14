import React, { useState, useEffect } from 'react'

import styles from './Timer.module.css'

import { Renders } from '../Renders'
import { formatTimer } from '../../utils/utils'
import ComponentTag from '../ComponentTag'

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
			<p>
				<ComponentTag name='Timer' />
				<Renders />
			</p>
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
