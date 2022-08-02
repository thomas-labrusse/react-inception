import React, { useReducer } from 'react'
import styles from './App.module.css'

import FullTag from '../../layout/demos/FullTag'

import Cell from './Cell'

const App = () => {
	const initialState = [
		[2, 5, 6],
		[1, 2, 3],
	]

	const reducer = (state, action) => {
		switch (action.type) {
			case 'add_column': {
				if (state.length >= 4) {
					alert('This table is limited to 4 columns.')
					return [...state]
				}
				const columnLength = state[0].length
				const newColumn = []
				for (let i = 0; i < columnLength; i++) {
					newColumn.push(null)
				}
				state.push(newColumn)
				return [...state]
			}
			case 'remove_column': {
				state.splice(action.id, 1)
				return [...state]
			}
			case 'add_row': {
				if (state[0].length >= 7) {
					alert('This table is limited to 7 rows.')
					return [...state]
				}
				state.forEach((col) => {
					col.push(null)
				})
				return [...state]
			}
			case 'remove_row': {
				state.forEach((col) => col.splice(action.id, 1))
				return [...state]
			}
			case 'edit_cell': {
				const newArray = [...state]
				newArray[action.colId][action.rowId] = action.content
				return [...newArray]
			}
			default:
				throw Error('Unknown action :', action.type)
		}
	}

	const initializeState = () => {
		return [
			[null, null, null],
			[null, null, null],
		]
	}

	const [state, dispatch] = useReducer(reducer, null, initializeState)

	const handleAddColumn = () => {
		dispatch({
			type: 'add_column',
		})
	}

	const handleRemoveColumn = (id) => {
		dispatch({
			type: 'remove_column',
			id: id,
		})
	}

	const handleAddRow = () => {
		dispatch({
			type: 'add_row',
		})
	}
	const handleRemoveRow = (id) => {
		dispatch({
			type: 'remove_row',
			id: id,
		})
	}

	const handleEditCell = (colId, rowId, content) => {
		dispatch({
			type: 'edit_cell',
			colId: colId,
			rowId: rowId,
			content: content,
		})
	}

	return (
		<div className={styles.app}>
			<FullTag name={'App'} />
			<div className={styles.container}>
				<div className={styles.panel}>
					<button onClick={handleAddColumn} className='btn'>
						Create table
					</button>
					<button onClick={handleAddColumn} className='btn'>
						Add column
					</button>
					<button onClick={handleAddRow} className='btn'>
						Add row
					</button>
				</div>
				<div className={styles['table-container']}>
					<div className={styles.rows}>
						{state &&
							state.map((col, colId) => {
								return (
									<div key={colId} className={styles.column}>
										{col.map((val, rowId) => (
											<Cell
												key={rowId}
												value={val}
												colId={colId}
												rowId={rowId}
												handleEditCell={handleEditCell}
											/>
										))}
										<button
											onClick={() => handleRemoveColumn(colId)}
											className={styles.button}
										>
											-
										</button>
									</div>
								)
							})}
						{state && (
							<div className={styles['row-buttons']}>
								{state[0].map((row, rowId) => {
									return (
										<button
											key={rowId}
											className={styles.button}
											onClick={() => handleRemoveRow(rowId)}
										>
											-
										</button>
									)
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
