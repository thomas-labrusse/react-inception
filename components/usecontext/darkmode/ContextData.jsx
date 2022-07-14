import React, { useContext } from 'react'

import { ThemeContext } from './Context'

const ContextData = () => {
	const themeContext = useContext(ThemeContext)
	const { darkTheme } = themeContext
	return (
		<div>
			<p>Context.Provider :</p>
			<p>{`value : { darkTheme: ${
				darkTheme ? 'true' : 'false'
			}, toggleTheme: f handleToggle() }`}</p>
		</div>
	)
}

export default ContextData
