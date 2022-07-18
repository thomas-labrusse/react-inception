import React from 'react'

import { Renders } from './Renders'
import ComponentTag from './ComponentTag'

const FullTag = ({ name }) => {
	return (
		<div>
			<ComponentTag name={name} />
			<Renders />
		</div>
	)
}

export default FullTag
