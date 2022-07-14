import React, { useContext } from 'react'
import styles from '../Child.module.css'

import { LanguageContext } from './Context'
import ComponentTag from '../../ComponentTag'
import { Renders } from '../../Renders'

const Child = () => {
	const languageContext = useContext(LanguageContext)
	const { language } = languageContext

	const content = {
		en: 'Welcome',
		fr: 'Bienvenue',
		es: 'Hola',
		ja: 'おはようございます',
	}

	return (
		<div className={styles.light}>
			<div className={styles.child}>
				<p>
					<ComponentTag name='FirstChild' />
					<Renders />
				</p>
				<p>{content[language]}</p>
			</div>
		</div>
	)
}

export default Child
