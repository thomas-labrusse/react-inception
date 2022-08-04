import styles from '../styles/Home.module.css'

import Card from '../components/layout/Card'

const articles = [
	{
		id: 1,
		title: 'Dark Mode (useContext)',
		link: '/examples/dark-mode',
		description: 'Dark mode with the useContext hook.',
		tags: ['useContext', 'useState'],
	},
	{
		id: 2,
		title: 'Language Preference (useContext)',
		link: '/examples/language-preference',
		description: 'Language preference with the useContext hook.',
		tags: ['useContext', 'useState'],
	},
	{
		id: 3,
		title: 'Chess Clock (useReducer)',
		link: '/examples/chess-clock',
		description: 'A simple chess clock with useReducer and useEffect hooks.',
		tags: ['useEffect', 'useReducer'],
	},
	{
		id: 4,
		title: 'useFetch (custom hook)',
		link: '/examples/usefetch-custom-hook',
		description:
			'A custom hook to fetch any JSON data, on first render or via handlers.',
		tags: ['custom hook', 'useEffect', 'useCallback'],
	},
	{
		id: 5,
		title: 'Renders Counter (useRef)',
		link: '/examples/renders-counter',
		description:
			'A tiny component to track a parent component number of renders (optimization tool).',
		tags: ['useRef', 'key'],
	},
	{
		id: 6,
		title: 'Table Creator (useReducer)',
		link: '/examples/table-creator',
		description:
			'Creating a table with custom number of columns and rows, with useReducer.',
		tags: ['useReducer'],
	},
]

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles['cards-container']}>
				{articles.map((article) => {
					return (
						<Card
							key={article.id}
							title={article.title}
							link={article.link}
							description={article.description}
							tags={article.tags}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Home
