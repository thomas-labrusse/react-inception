import { useRef } from 'react'
import styles from './Renders.module.css'

export const Renders = () => {
	const renderCounter = useRef(0)
	renderCounter.current = renderCounter.current + 1

	return (
		// Adding a key to make the component unmount and remonte on each new render (for the animation to work)
		<span key={renderCounter.current} className={styles.renders}>
			{'['}
			{renderCounter.current}
			{']'}
		</span>
	)
}
