import React from 'react'

import styles from './Tag.module.css'

const Tag = ({ text }) => {
	return <div className={styles.tag}>{text}</div>
}

export default Tag
