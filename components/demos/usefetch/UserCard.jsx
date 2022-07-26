import React from 'react'
import FullTag from '../../layout/demos/FullTag'
import styles from './UserCard.module.css'

const BusinessCard = ({ name, phone, email, website }) => {
	return (
		<div className={styles['business-card']}>
			<FullTag name={'UserCard'} />
			<div className={styles.infos}>
				<>
					<p>{name}</p>
					<p>{phone}</p>
					<p>{email}</p>
					<p>{website}</p>
				</>
			</div>
		</div>
	)
}

export default BusinessCard
