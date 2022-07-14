import React from 'react'

import styles from './NestedChild.module.css'

import { Renders } from '../../Renders'

import ComponentTag from '../../ComponentTag'

const NestedChild1 = () => {
	return (
		<div className={styles.light}>
			<div className={styles['nested-child']}>
				<ComponentTag name='NestedChild1' />
				<Renders />
			</div>
		</div>
	)
}

export default NestedChild1
