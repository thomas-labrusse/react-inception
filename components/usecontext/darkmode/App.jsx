import React from 'react'
import styles from '../App.module.css'

import ThemeContextProvider from './Context'
import Nav from './Nav'
import Parent from './Parent'
import ContextData from './ContextData.jsx'

import ComponentTag from '../../ComponentTag'

import { Renders } from '../../Renders'

const App = () => {
	return (
		<ThemeContextProvider>
			<div className={styles.app}>
				<p>
					<ComponentTag name={'App'} />
					<Renders />
				</p>
				<ContextData />

				<div className={styles['components-container']}>
					<Nav />
					<Parent />
				</div>
			</div>
		</ThemeContextProvider>
	)
}

export default App
