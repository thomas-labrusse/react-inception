import React from 'react'
import styles from '../App.module.css'

import Parent from './Parent'
import Nav from './Nav'
import FullTag from '../../FullTag'

import LanguageContextProvider from './Context'

const App = () => {
	return (
		<LanguageContextProvider>
			<div className={styles.app}>
				<FullTag name={'App'} />
				<div className={styles['components-container']}>
					<Nav />
					<Parent />
				</div>
			</div>
		</LanguageContextProvider>
	)
}

export default App
