import React, { useContext } from 'react'

import styles from './Nav.module.css'

import { ThemeContext } from './Context'

import FullTag from '../../layout/demos/FullTag'

const Nav = () => {
	const themeContext = useContext(ThemeContext)
	const { darkTheme, toggleTheme } = themeContext

	return (
		<div className={styles.nav}>
			<FullTag name={'Nav'} />
			<div>
				<button onClick={toggleTheme} className='btn'>
					Change theme to : {darkTheme ? 'Light' : 'Dark'}
				</button>
			</div>
		</div>
	)
}

export default Nav
