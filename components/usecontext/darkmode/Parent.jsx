import React from 'react'
import styles from '../Parent.module.css'
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

import { Renders } from '../../Renders'
import ComponentTag from '../../ComponentTag'
import FullTag from '../../FullTag'

const Parent = () => {
	return (
		<div className={styles.parent}>
			<FullTag name={'Parent'} />
			<div className={styles['children-container']}>
				<FirstChild />
				<SecondChild />
			</div>
		</div>
	)
}

export default Parent
