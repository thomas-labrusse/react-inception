import React, { useState } from 'react'

export const ThemeContext = React.createContext({
	darkTheme: false,
	toggleTheme: () => {},
})

// Comment
const ThemeContextProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(false)
	const handleToggle = () => {
		setIsDark((prev) => !prev)
	}
	return (
		<ThemeContext.Provider
			value={{ darkTheme: isDark, toggleTheme: handleToggle }}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
