import styles from '../styles/Home.module.css'

import Card from '../components/Card'

const articles = [
	{
		id: 1,
		title: 'Dark Mode (useContext)',
		link: '/hooks/usecontext/dark-mode',
	},
	{
		id: 2,
		title: 'Language preference (useContext)',
		link: '/hooks/usecontext/language-preference',
	},
	{
		id: 3,
		title: 'Chess Clock (useState)',
		link: '/hooks/useState/chess-clock',
	},
	{
		id: 4,
		title: 'Data fetching (useEffect)',
		link: '/hooks/useState/chess-clock',
	},
]

const Home = () => {
	return (
		<div className={styles.container}>
			<h2>Home</h2>
			<div className={styles['cards-container']}>
				{articles.map((article) => {
					return (
						<Card key={article.id} title={article.title} link={article.link} />
					)
				})}
			</div>
		</div>
	)
}

export default Home
