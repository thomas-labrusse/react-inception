export const mkdUseEffect = `const [rendersCount, setRendersCount] = useState(0)

	useEffect(() => {
		setRendersCount((prev) => prev + 1)
	})`

export const mkdApp = `import Child from './Child'
import { Renders } from '../../layout/demos/Renders'

const App = () => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount((prev) => prev + 1)
	}

	return (
		<div className={styles.app}>
			<Renders />
			<div>
				<button onClick={handleClick}>
					Increment
				</button>
				<span>{count}</span>
			</div>
			<Child />
		</div>
	)
}`

export const mkdRenders = `import { useRef } from 'react'

export const Renders = () => {
	const renderCounter = useRef(0)
	renderCounter.current = renderCounter.current + 1

	return (
		<span key={renderCounter.current} className={styles.renders}>
			{'['}{renderCounter.current}{']'}
		</span>
	)
}`

export const mkdChild = `import { Renders } from '../../layout/demos/Renders'

const Child = () => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount((prev) => prev + 1)
	}
	return (
		<div>
			<Renders />
			<div>
				<button onClick={handleClick}>
					Increment
				</button>
				<span>{count}</span>
			</div>
		</div>
	)
}
`

export const mkdUseRef1 = `const renderCounter = useRef(0)`

export const mkdUseRef2 = `renderCounter.current = renderCounter.current + 1

	return (
		<span key={renderCounter.current} className={styles.renders}>
			{'['}{renderCounter.current}{']'}
		</span>
	)`
