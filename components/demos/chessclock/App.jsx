import React, { useEffect, useCallback, useReducer } from 'react'

import styles from './App.module.css'

import Timer from './Timer'
import FullTag from '../../layout/demos/FullTag'
import { reducer, initialState } from './reducer'

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const handleTimerClicked = (id) => {
		dispatch({
			type: 'timer_clicked',
			id: id,
		})
	}

	const handlePause = () => {
		dispatch({
			type: 'pause',
		})
	}

	const handleReset = () => {
		dispatch({
			type: 'reset',
		})
	}

	const handleDecreaseTimer = (id) => {
		dispatch({
			type: 'decrease_timer',
			id: id,
		})
	}

	const handleGameOver = useCallback(() => {
		dispatch({
			type: 'game_over',
		})
	}, [])

	useEffect(() => {
		if (state.gameOver) return
		console.log('useEffect game over check')
		if (state.timer1 === 0 || state.timer2 === 0) {
			handleGameOver()
		}
	}, [state.timer1, state.timer2, handleGameOver, state.gameOver])

	return (
		<div className={styles.app}>
			<FullTag name={'App'} />
			<div className={styles['timers-container']}>
				<Timer
					id={1}
					name={'Player 1'}
					activeTimer={state.activeTimer}
					activePlayer={state.activePlayer}
					handleTimerClick={handleTimerClicked}
					timer={state.timer1}
					decreaseTimer={handleDecreaseTimer}
				/>
				<Timer
					id={2}
					name={'Player 2'}
					activeTimer={state.activeTimer}
					activePlayer={state.activePlayer}
					handleTimerClick={handleTimerClicked}
					timer={state.timer2}
					decreaseTimer={handleDecreaseTimer}
				/>
			</div>
			<div className={styles['control-panel']}>
				<button onClick={handlePause} className='btn'>
					{state.paused ? 'Resume' : 'Pause'}
				</button>
				<button onClick={handleReset} className='btn'>
					Reset
				</button>
			</div>
		</div>
	)
}

export default App
