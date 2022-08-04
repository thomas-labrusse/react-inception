import styles from './Header.module.css'
import Nav from './Nav'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.upper}>
				<h1 className={styles.title}>
					{' '}
					<span className='color'>React</span> {'Fishing Rod'}
				</h1>
				<Nav />
			</div>
			<div className={styles.lower}>
				<p className={styles.tagline}>
					{
						'Bite-size, visual examples to sharpen your React hooks understanding.'
					}
				</p>
			</div>
		</div>
	)
}

export default Header
