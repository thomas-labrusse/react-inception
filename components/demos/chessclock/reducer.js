export const reducer = (state, action) => {
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
}
