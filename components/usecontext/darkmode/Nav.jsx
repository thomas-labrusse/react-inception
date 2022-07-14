import React, { useContext } from 'react'

import styles from '../Nav.module.css'

import { ThemeContext } from './Context'

import { Renders } from '../../Renders'
import ComponentTag from '../../ComponentTag'

const Nav = () => {
	const themeContext = useContext(ThemeContext)
	const { darkTheme, toggleTheme } = themeContext

	const handleToggle = () => {
		toggleTheme()
	}

	return (
		<div className={styles.nav}>
			<div>
				<ComponentTag name='Nav' />
				<Renders />
			</div>
			<div>
				<button onClick={handleToggle} className={styles['theme-button']}>
					Change theme to : {darkTheme ? 'Light' : 'Dark'}
				</button>
			</div>
		</div>
	)
}

export default Nav
