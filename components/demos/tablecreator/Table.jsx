import React, { useReducer } from 'react'
import styles from './Table.module.css'

import FullTag from '../../layout/demos/FullTag'

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
	)
}

export default Table
