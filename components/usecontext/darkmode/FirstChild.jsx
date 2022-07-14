import React, { useContext } from 'react'
import styles from '../Child.module.css'
import { ThemeContext } from './Context'

import { Renders } from '../../Renders'
import ComponentTag from '../../ComponentTag'

const FirstChild = () => {
	const themeContext = useContext(ThemeContext)
	const { darkTheme } = themeContext
	return (
		<div className={darkTheme ? styles.dark : styles.light}>
			<div className={styles.child}>
				<p>
					<ComponentTag name='FirstChild' />
					<Renders />
				</p>
			</div>
		</div>
	)
}

export default FirstChild
