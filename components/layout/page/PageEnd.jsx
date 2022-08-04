import React from 'react'
import Link from 'next/link'

import styles from './PageEnd.module.css'

const PageEnd = ({ link }) => {
	return (
		<div className={styles['page-end']}>
			<Link href={'/'}>
				<a className='link'>Home</a>
			</Link>
			<Link href={link}>
				<a className='link'>Back to top</a>
			</Link>
		</div>
	)
}

export default PageEnd
