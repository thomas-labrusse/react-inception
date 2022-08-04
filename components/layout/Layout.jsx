import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className={styles['main-container']}>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}

export default Layout
