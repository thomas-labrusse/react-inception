export const mkdApp = `import React, { useState } from 'react'

import Table from './Table'

const App = () => {
	const [table, setTable] = useState({ format: 2, isCreated: false })

	const deleteHandler = () => {
		setTable({ format: 2, isCreated: false })
	}

	return (
		<div className={styles.app}>
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

export default App`

export const mkdReducer = `export const reducer = (state, action) => {
	switch (action.type) {
		case 'add_column': {
			if (state.length >= 4) {
				alert('This table is limited to 4 columns.')
				return [...state]
			}
			const columnLength = state[0].length
			const newColumn = [[]]
			for (let i = 0; i < columnLength; i++) {
				newColumn[0].push('')
			}
			const newArray = state.concat(newColumn)
			return [...newArray]
		}
		case 'remove_column': {
			if (state.length <= 1) {
				return [...state]
			}
			const newArray = state.filter((_, id) => id !== action.id)
			return [...newArray]
		}
		case 'add_row': {
			if (state[0].length >= 6) {
				alert('This table is limited to 6 rows.')
				return [...state]
			}
			const newArray = [...state]
			newArray.forEach((col) => {
				col.push('')
			})
			return [...newArray]
		}
		case 'remove_row': {
			if (state[0].length <= 1) {
				return [...state]
			}
			const newArray = []
			state.forEach((col, id) => {
				newArray[id] = col.filter((_, id) => id !== action.id)
			})
			return [...newArray]
		}
		case 'edit_cell': {
			const newArray = [...state]
			newArray[action.colId][action.rowId] = action.content
			return [...newArray]
		}
		default:
			throw Error('Unknown action :', action.type)
	}
}`

export const mkdTable = `import React, { useReducer } from 'react'

import Cell from './Cell'

import { reducer } from './reducer'

const initializeState = (format) => {
	if (format === 2) {
		return [
			['', ''],
			['', ''],
		]
	}
	if (format === 3) {
		return [
			['', '', ''],
			['', '', ''],
			['', '', ''],
		]
	}
}

const Table = ({ format, deleteTable }) => {
	const [state, dispatch] = useReducer(reducer, format, initializeState)

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
		<div className={styles.table}>
			<div className={styles.container}>
				<div className={styles.panel}>
					<button onClick={handleAddColumn} className='btn'>
						Add column
					</button>
					<button onClick={handleAddRow} className='btn'>
						Add row
					</button>
					<button onClick={deleteTable} className='btn'>
						Create new table
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

export default Table`

export const mkdCell = `import React from 'react'

const Cell = ({ value, colId, rowId, handleEditCell }) => {
	const handleChange = (e) => {
		e.preventDefault()
		handleEditCell(colId, rowId, e.target.value)
	}

	return (
		<div className={styles.cell}>
			<input
				name=''
				id=''
				className={styles.input}
				value={value}
				onChange={handleChange}
			/>
		</div>
	)
}

export default Cell`
