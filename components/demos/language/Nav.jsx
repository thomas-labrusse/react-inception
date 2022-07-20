import React, { useContext } from 'react'

import styles from './Nav.module.css'

import { LanguageContext } from './Context'
import FullTag from '../../layout/demos/FullTag'

const Nav = () => {
	const languageContext = useContext(LanguageContext)
	const { language, selectLanguage } = languageContext

	const handleSelect = (e) => {
		selectLanguage(e.target.value)
	}

	return (
		<div className={styles.nav}>
			<FullTag name={'Nav'} />
			<div className={styles.select}>
				<select
					name='lang'
					id='lang'
					value={language}
					onChange={handleSelect}
					defaultValue='en'
				>
					<option value='en'>English</option>
					<option value='fr'>Français</option>
					<option value='es'>Español</option>
					<option value='ja'>日本語</option>
				</select>
			</div>
		</div>
	)
}

export default Nav
