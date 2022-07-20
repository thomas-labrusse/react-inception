import React from 'react'
import Link from 'next/link'

import styles from './Card.module.css'

import Tag from './Tag'

const Card = (props) => {
	const { title, link, description, tags } = props
	return (
		<Link href={link}>
			<div className={styles.card}>
				<h3>{title}</h3>
				<p>{description}</p>
				<div className={styles['tag-container']}>
					{tags.map((tag, i) => {
						return <Tag key={i} text={tag} />
					})}
				</div>
			</div>
		</Link>
	)
}

export default Card
