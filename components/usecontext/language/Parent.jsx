import React from 'react'

import styles from '../Parent.module.css'

import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

import ComponentTag from '../../ComponentTag'
import { Renders } from '../../Renders'

const Parent = () => {
	return (
		<div className={styles.parent}>
			<p>
				<ComponentTag name='Parent' />
				<Renders />
			</p>
			<div className={styles['children-container']}>
				<FirstChild />
				<SecondChild />
			</div>
		</div>
	)
}

export default Parent
