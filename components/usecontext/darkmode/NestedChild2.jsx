import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from './Context'

import styles from './NestedChild.module.css'

import { Renders } from '../../Renders'
import ComponentTag from '../../ComponentTag'

const NestedChild2 = () => {
	const themeContext = useContext(ThemeContext)
	const { darkTheme } = themeContext

	useEffect(() => {
		console.log('rendering Nested Child 2')
	})

	return (
		<div className={darkTheme ? styles.dark : styles.light}>
			<div className={styles['nested-child']}>
				<ComponentTag name='NestedChild2' />
				<Renders />
			</div>
		</div>
	)
}

export default NestedChild2
