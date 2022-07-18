import React from 'react'

import styles from './Caption.module.css'

const Caption = ({ text }) => {
	return <p className={styles.caption}>{text}</p>
}

export default Caption
