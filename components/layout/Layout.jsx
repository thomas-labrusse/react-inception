import Nav from './Nav'
import Header from './Header'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
	return (
		<>
			<Header>
				<h1 className={styles.title}>React Inception</h1>
				<Nav />
			</Header>
			<div className={styles['main-container']}>
				<main>{children}</main>
			</div>
		</>
	)
}

export default Layout
