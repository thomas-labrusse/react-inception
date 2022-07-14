import { useRef } from 'react'
import styles from './Renders.module.css'

export const Renders = () => {
	const renderCounter = useRef(0)
	renderCounter.current = renderCounter.current + 1

	return (
		<span className={styles.renders}>
			{'{'}
			{renderCounter.current}
			{'}'}
		</span>
	)
}
