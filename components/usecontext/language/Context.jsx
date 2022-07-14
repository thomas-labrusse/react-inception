import React, { useState } from 'react'

export const LanguageContext = React.createContext({
	language: 'en',
	selectLanguage: () => {},
})

const LanguageContextProvider = ({ children }) => {
	const [selectedLanguage, setSelectedLanguage] = useState('en')

	const handleSelectLanguage = (lang) => {
		setSelectedLanguage(lang)
	}

	return (
		<LanguageContext.Provider
			value={{
				language: selectedLanguage,
				selectLanguage: handleSelectLanguage,
			}}
		>
			{children}
		</LanguageContext.Provider>
	)
}

export default LanguageContextProvider
