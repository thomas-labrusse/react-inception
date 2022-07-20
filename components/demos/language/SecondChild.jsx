import React, { useContext } from 'react'
import styles from './Child.module.css'

import { LanguageContext } from './Context'
import FullTag from '../../layout/demos/FullTag'

const Child = () => {
	const languageContext = useContext(LanguageContext)
	const { language } = languageContext

	const content = {
		en: 'React hooks are really great.',
		fr: 'Les hooks de React sont vraiment géniaux.',
		es: 'Los React hooks son realmente fantásticos.',
		ja: 'Reactのフックは本当にすごいです。',
	}

	return (
		<div className={styles.light}>
			<div className={styles.child}>
				<FullTag name={'SecondChild'} />
				<p className={styles.content}>{content[language]}</p>
			</div>
		</div>
	)
}

export default Child
