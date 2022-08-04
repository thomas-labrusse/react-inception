import Link from 'next/link'
import styles from './Nav.module.css'

const Nav = () => {
	return (
		<div className={styles.nav}>
			<Link href={'/'}>
				<a className='nav-link'>Home</a>
			</Link>
		</div>
	)
}

export default Nav
