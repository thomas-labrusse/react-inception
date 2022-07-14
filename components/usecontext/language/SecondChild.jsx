import React, { useContext } from 'react'
import styles from '../Child.module.css'

import { LanguageContext } from './Context'
import ComponentTag from '../../ComponentTag'
import { Renders } from '../../Renders'

const Child = () => {
	const languageContext = useContext(LanguageContext)
	const { language } = languageContext

	const content = {
		en: 'How are you ?',
		fr: 'Comment ça va ?',
		es: 'Como estas ?',
		ja: 'げんきですか。',
	}

	return (
		<div className={styles.light}>
			<div className={styles.child}>
				<p>
					<ComponentTag name='SecondChild' />
					<Renders />
				</p>
				<p>{content[language]}</p>
			</div>
		</div>
	)
}

export default Child
