import React, { useContext } from 'react'

import styles from '../Nav.module.css'

import { LanguageContext } from './Context'
import ComponentTag from '../../ComponentTag'
import { Renders } from '../../Renders'

const Nav = () => {
	const languageContext = useContext(LanguageContext)
	const { language, selectLanguage } = languageContext

	const handleSelect = (e) => {
		selectLanguage(e.target.value)
	}

	return (
		<div className={styles.nav}>
			<p>
				<ComponentTag name='Nav' />
				<Renders />
			</p>
			<div>
				<select
					name='lang'
					id='lang'
					value={language}
					onChange={handleSelect}
					defaultValue='en'
				>
					<option value='en'>english</option>
					<option value='fr'>français</option>
					<option value='es'>español</option>
					<option value='ja'>日本語</option>
				</select>
			</div>
		</div>
	)
}

export default Nav
