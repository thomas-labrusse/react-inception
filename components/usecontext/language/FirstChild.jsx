import React, { useContext } from 'react'
import styles from '../Child.module.css'

import { LanguageContext } from './Context'
import FullTag from '../../FullTag'

const Child = () => {
	const languageContext = useContext(LanguageContext)
	const { language } = languageContext

	const content = {
		en: 'Welcome, how are you ?',
		fr: 'Bienvenue, comment allez vous ?',
		es: 'Bienvenidos, todo esta bien ?',
		ja: 'おはようございます, 元気ですか。',
	}

	return (
		<div className={styles.light}>
			<div className={styles.child}>
				<FullTag name={'FirstChild'} />
				<p className={styles.content}>{content[language]}</p>
			</div>
		</div>
	)
}

export default Child
