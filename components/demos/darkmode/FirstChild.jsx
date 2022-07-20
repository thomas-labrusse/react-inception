import React, { useContext } from 'react'
import styles from './Child.module.css'
import { ThemeContext } from './Context'

import FullTag from '../../layout/demos/FullTag'

const FirstChild = () => {
	const themeContext = useContext(ThemeContext)
	const { darkTheme } = themeContext
	return (
		<div className={darkTheme ? styles.dark : styles.light}>
			<div className={styles.child}>
				<FullTag name={'FirstChild'} />
			</div>
		</div>
	)
}

export default FirstChild
