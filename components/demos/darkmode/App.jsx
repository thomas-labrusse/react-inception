import React from 'react'
import styles from './App.module.css'

import ThemeContextProvider from './Context'
import Nav from './Nav'
import Parent from './Parent'

import FullTag from '../../FullTag'

const App = () => {
	return (
		<ThemeContextProvider>
			<div className={styles.app}>
				<FullTag name={'App'} />
				<div className={styles['components-container']}>
					<Nav />
					<Parent />
				</div>
			</div>
		</ThemeContextProvider>
	)
}

export default App
