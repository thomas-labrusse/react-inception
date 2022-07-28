export const mkdApp = `import React, { useEffect, useCallback, useReducer } from 'react'

import Timer from './Timer'
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
		<div>
			<div>
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
			<div>
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

export default App`

export const mkdReducer = `export const reducer = (state, action) => {
	switch (action.type) {
		case 'timer_clicked': {
			// first timer to be clicked starts
			// no timer can be played if the game is paused
			if (!state.activePlayer && !state.paused) {
				// returns next state for React to set
				return { ...state, activePlayer: action.id, activeTimer: action.id }
			}

			// guard clause to prevent unactive player to control the timers
			if (state.activeTimer !== action.id) return { ...state }

			// toggle active player
			if (action.id === 1) {
				return { ...state, activePlayer: 2, activeTimer: 2 }
			} else if (action.id === 2) {
				return { ...state, activePlayer: 1, activeTimer: 1 }
			}
		}
		case 'pause': {
			if (!state.activePlayer || state.gameOver) return { ...state }
			if (state.paused) {
				return {
					...state,
					activeTimer: state.activePlayer,
					paused: !state.paused,
				}
			} else {
				return {
					...state,
					activeTimer: null,
					paused: !state.paused,
				}
			}
		}
		case 'reset': {
			return { ...initialState }
		}
		case 'decrease_timer': {
			return action.id === 1
				? { ...state, timer1: state.timer1 - 1 }
				: { ...state, timer2: state.timer2 - 1 }
		}
		case 'game_over': {
			return { ...state, paused: true, gameOver: true, activeTimer: null }
		}
		default: {
			throw Error('Unknown action: ' + action.type)
		}
	}
}

export const initialState = {
	activePlayer: null,
	activeTimer: null,
	gameOver: false,
	paused: false,
	timer1: 300,
	timer2: 300,
}`

export const mkdTimer = `import React, { useEffect } from 'react'

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
		if (activeTimer === id) {
			const clock = setInterval(() => decreaseTimer(id), 1000)
			return () => {
				clearInterval(clock)
			}
		}
	}, [activeTimer, id, decreaseTimer])

	return (
		<h2>{name}</h2>
		<div className={activePlayer === id ? styles.on : null}>
			<div className={styles.time} onClick={() => handleTimerClick(id)}>
				<p>{formatTimer(timer)}</p>
			</div>
		</div>
	)
}

export default Timer`

export const mkdReducer1 = `const [state, dispatch] = useReducer(reducer, initialState)`

export const mkdReducer2 = `export const initialState = {
	activePlayer: null,
	activeTimer: null,
	gameOver: false,
	paused: false,
	timer1: 300,
	timer2: 300,
}`

export const mkdReducer3 = `const handlePause = () => {
		dispatch({
			type: 'pause',
		})
	}`

export const mkdReducer4 = `const handleTimerClicked = (id) => {
		dispatch({
			type: 'timer_clicked',
			id: id,
		})
	}`
export const mkdReducer5 = `export const reducer = (state, action) => {
	switch (action.type) {
		case 'timer_clicked': {
			// some code...
		}
		case 'pause': {
			// some code...
		}
		case 'reset': {
			// some code...
		}
		case 'decrease_timer': {
			// some code...
		}
		case 'game_over': {
			// some code...
		}
		default: {
			throw Error('Unknown action: ' + action.type)
		}
	}
}`
export const mkdReducer6 = `case 'reset': {
	return { ...initialState }
}`
export const mkdReducer7 = `case 'timer_clicked': {
			if (!state.activePlayer && !state.paused) {
				return { ...state, activePlayer: action.id, activeTimer: action.id }
			}
			if (state.activeTimer !== action.id) return { ...state }
			if (action.id === 1) {
				return { ...state, activePlayer: 2, activeTimer: 2 }
			} else if (action.id === 2) {
				return { ...state, activePlayer: 1, activeTimer: 1 }
			}
		}`
