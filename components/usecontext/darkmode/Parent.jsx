import React from 'react'
import styles from '../Parent.module.css'
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

import { Renders } from '../../Renders'
import ComponentTag from '../../ComponentTag'

const Parent = () => {
	return (
		<div className={styles.parent}>
			<ComponentTag name='Parent' />
			<Renders />
			<div className={styles['children-container']}>
				<FirstChild />
				<SecondChild />
			</div>
		</div>
	)
}

export default Parent
