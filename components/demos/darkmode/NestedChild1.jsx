import React from 'react'

import styles from './NestedChild.module.css'

import FullTag from '../../layout/demos/FullTag'

const NestedChild1 = () => {
	return (
		<div className={styles.light}>
			<div className={styles['nested-child']}>
				<FullTag name={'NestedChild1'} />
			</div>
		</div>
	)
}

export default NestedChild1
