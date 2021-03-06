import styles from '../styles/Home.module.css'

import Card from '../components/layout/Card'

const articles = [
	{
		id: 1,
		title: 'Dark Mode (useContext)',
		link: '/demos/dark-mode',
		description: 'Dark mode with the useContext hook.',
		tags: ['useContext', 'useState'],
	},
	{
		id: 2,
		title: 'Language preference (useContext)',
		link: '/demos/language-preference',
		description: 'Language preference with the useContext hook.',
		tags: ['useContext', 'useState'],
	},
	{
		id: 3,
		title: 'Chess Clock (useReducer)',
		link: '/demos/chess-clock',
		description: 'A simple chess clock with useReducer and useEffect hooks.',
		tags: ['useEffect', 'useReducer'],
	},
	{
		id: 4,
		title: 'useFetch (custom hook)',
		link: '/demos/usefetch-custom-hook',
		description:
			'A custom hook to fetch any JSON data, directly or via a side effect.',
		tags: ['custom hook', 'useEffect', 'useCallback'],
	},
	{
		id: 5,
		title: 'Renders counter component (useRef)',
		link: '/demos/renders-counter',
		description:
			'A tiny component to track a parent component number of renders.',
		tags: ['useRef', 'key'],
	},
	{
		id: 6,
		title: 'useReducer example with state initialization',
		link: '/demos/chess-clock',
		description:
			'a tool to create a table with customizable number of col and row ?',
		tags: ['useReducer'],
	},
	{
		id: 7,
		title: 'useReducer examples',
		link: '/demos/chess-clock',
		description: 'find useReducer examples',
		tags: ['useReducer'],
	},
	{
		id: 8,
		title: 'Custom hooks examples',
		link: '/demos/chess-clock',
		description: '1/ useContext custom hook to avoid extra imports',
		tags: ['useEffect'],
	},
]

const Home = () => {
	return (
		<div className={styles.container}>
			<h2>Home</h2>
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
