import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from './Context'

import styles from './NestedChild.module.css'

import DeeplyNested from './DeeplyNested'

import FullTag from '../../FullTag'

const NestedChild2 = () => {
	const themeContext = useContext(ThemeContext)
	const { darkTheme } = themeContext

	useEffect(() => {
		console.log('rendering Nested Child 2')
	})

	return (
		<div className={darkTheme ? styles.dark : styles.light}>
			<div className={styles['nested-child']}>
				<FullTag name={'NestedChild2'} />
				<DeeplyNested />
			</div>
		</div>
	)
}

export default NestedChild2
