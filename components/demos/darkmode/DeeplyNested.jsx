import React from 'react'
import styles from './Child.module.css'

import FullTag from '../../layout/demos/FullTag'

const DeeplyNested = () => {
	return (
		<div className={styles['deeply-nested-child']}>
			<FullTag name={'DeeplyNested'} />
		</div>
	)
}

export default DeeplyNested
