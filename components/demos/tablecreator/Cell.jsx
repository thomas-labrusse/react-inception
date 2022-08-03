import React from 'react'

import styles from './Cell.module.css'

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

export default Cell
