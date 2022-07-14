import React from 'react'
import Link from 'next/link'

import styles from './Card.module.css'

const Card = (props) => {
	const { title, link } = props
	return (
		<Link href={link}>
			<div className={styles.card}>
				<h3>{title}</h3>
			</div>
		</Link>
	)
}

export default Card
