import React from 'react'
import styles from '../Child.module.css'

import NestedChild1 from './NestedChild1'
import NestedChild2 from './NestedChild2'

import { Renders } from '../../Renders'
import ComponentTag from '../../ComponentTag'

const SecondChild = () => {
	return (
		<div className={styles['second-child']}>
			<p>
				<ComponentTag name='SecondChild' />
				<Renders />
			</p>
			<div className={styles['nested-children-container']}>
				<NestedChild1 />
				<NestedChild2 />
			</div>
		</div>
	)
}

export default SecondChild
