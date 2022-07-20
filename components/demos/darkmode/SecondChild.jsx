import React from 'react'
import styles from './Child.module.css'

import NestedChild1 from './NestedChild1'
import NestedChild2 from './NestedChild2'

import FullTag from '../../layout/demos/FullTag'

const SecondChild = () => {
	return (
		<div className={styles['second-child']}>
			<FullTag name={'SecondChild'} />
			<div className={styles['nested-children-container']}>
				<NestedChild1 />
				<NestedChild2 />
			</div>
		</div>
	)
}

export default SecondChild
