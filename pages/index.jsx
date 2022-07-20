import styles from '../styles/Home.module.css'

import Card from '../components/layout/Card'

const articles = [
	{
		id: 1,
		title: 'Dark Mode (useContext)',
		link: '/hooks/usecontext/dark-mode',
		description: 'Dark mode with the useContext hook',
		tags: ['useContext', 'useState'],
	},
	{
		id: 2,
		title: 'Language preference (useContext)',
		link: '/hooks/usecontext/language-preference',
		description: 'Language preference with the useContext hook',
		tags: ['useContext', 'useState'],
	},
	{
		id: 3,
		title: 'Chess Clock (useState)',
		link: '/hooks/useState/chess-clock',
		description: 'A simple chess clock with useReducer and useEffect hooks',
		tags: ['useEffect', 'useReducer'],
	},
	{
		id: 4,
		title: 'Data fetching (useEffect)',
		link: '/hooks/useState/chess-clock',
		description: 'Fetching data with the useEffect hook',
		tags: ['useEffect'],
	},
	{
		id: 5,
		title: 'Custom hooks examples',
		link: '/hooks/useState/chess-clock',
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
