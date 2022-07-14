import styles from './Header.module.css'

const Header = ({ children }) => {
	return <div className={styles.header}>{children}</div>
}

export default Header
