import React, { useState, useEffect, useCallback, useReducer } from 'react'

import styles from './App.module.css'

import Timer from './Timer'
import ComponentTag from '../ComponentTag'
import { Renders } from '../Renders'

const App = () => {
	const reducer = (state, action) => {
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

	const initialState = {
		activePlayer: null,
		activeTimer: null,
		gameOver: false,
		paused: false,
		timer1: 10,
		timer2: 10,
	}

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
			<p>
				<ComponentTag name='App' />
				<Renders />
			</p>
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
				<button onClick={handlePause} className={styles.button}>
					{state.paused ? 'Resume' : 'Pause'}
				</button>
				<button onClick={handleReset} className={styles.button}>
					Reset
				</button>
			</div>
		</div>
	)
}

export default App
