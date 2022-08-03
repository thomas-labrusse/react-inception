export const reducer = (state, action) => {
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
}
