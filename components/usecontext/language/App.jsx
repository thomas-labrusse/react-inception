import React from 'react'
import styles from '../App.module.css'

import Parent from './Parent'
import Nav from './Nav'
import ComponentTag from '../../ComponentTag'
import { Renders } from '../../Renders'

import LanguageContextProvider from './Context'

const App = () => {
	return (
		<LanguageContextProvider>
			<div className={styles.app}>
				<p>
					<ComponentTag name='App' />
					<Renders />
				</p>
				<div className={styles['components-container']}>
					<Nav></Nav>
					<Parent></Parent>
				</div>
			</div>
		</LanguageContextProvider>
	)
}

export default App
