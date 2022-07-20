import React from 'react'
import styles from './Parent.module.css'
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

import FullTag from '../../layout/demos/FullTag'

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
