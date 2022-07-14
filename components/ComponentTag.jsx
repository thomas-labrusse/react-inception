import React from 'react'
import styles from './ComponentTag.module.css'

const ComponentTag = ({ name }) => {
	return (
		<span className={styles.tag}>
			{'<'}
			{name}
			{' />'}
		</span>
	)
}

export default ComponentTag
