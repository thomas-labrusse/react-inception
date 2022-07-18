export const mkdContext = `import React, { useState } from 'react'

// Creating a context object
export const ThemeContext = React.createContext({
  darkTheme: false,
  toggleTheme: () => {},
})

// Creating a wrapping component with a context provider
const ThemeContextProvider = ({ children }) => {
  // The component will hold the relevant data in state
  const [isDark, setIsDark] = useState(false)

  const handleToggle = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ darkTheme: isDark, toggleTheme: handleToggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider`

export const mkdApp = `import React from 'react'

import styles from './App.module.css'
import Nav from './Nav'
import Parent from './Parent'

// Importing the context provider that we wrap around components
// that need to have access to our theme data and method
import ThemeContextProvider from './Context'

const App = () => {
  return (
    <ThemeContextProvider>
      <div className={styles.app}>
        <div className={styles['components-container']}>
          <Nav />
          <Parent />
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App`

export const mkdNav = `import React, { useContext } from 'react'
import styles from './Nav.module.css'
import { ThemeContext } from './Context'

const Nav = () => {
	const themeContext = useContext(ThemeContext)
	const { darkTheme, toggleTheme } = themeContext

	return (
		<div className={styles.nav}>
			<FullTag name={'Nav'} />
			<div>
				<button onClick={toggleTheme} className={styles['theme-button']}>
					Change theme to : {darkTheme ? 'Light' : 'Dark'}
				</button>
			</div>
		</div>
	)
}

export default Nav`

export const mkdParent = `import React from 'react'

import styles from './Parent.module.css'
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

const Parent = () => {
  return (
    <div className={styles['children-container']}>
      <FirstChild />
      <SecondChild />
    </div>
  )
}

export default Parent`

export const mkdFirstChild = `import React, { useContext } from 'react'
import { ThemeContext } from './Context'
import styles from './Child.module.css'

const FirstChild = () => {
  // Using the ThemeContext, this is possible only because FirstChild is
  // a descendent of a component wrapped by the context provider
  const themeContext = useContext(ThemeContext)
  // Destructuring our context object to have access to its current value
  const { darkTheme } = themeContext

  return (
    // Conditional rendering based on our context value
    <div className={darkTheme ? styles.dark : styles.light}>
      <div className={styles['first-child']}>
        <p>{'<FirstChild />'}</p>
      </div>
    </div>
  )
}

export default FirstChild`

export const mkdSecondChild = `import React from 'react'

import styles from './Child.module.css'
import NestedChild1 from './NestedChild1'
import NestedChild2 from './NestedChild2'

const SecondChild = () => {
  return (
    <div className={styles['second-child']}>
      <div className={styles['nested-children-container']}>
        <NestedChild1 />
        <NestedChild2 />
      </div>
    </div>
  )
}

export default SecondChild
`

export const mkdNested1 = `import React from 'react'
import styles from './NestedChild.module.css'

const NestedChild1 = () => {
  return (
    <div className={styles.light}>
      <div className={styles['nested-child']}>
      </div>
    </div>
  )
}

export default NestedChild1`

export const mkdNested2 = `import React, { useContext } from 'react'
import { ThemeContext } from './Context'
import styles from './NestedChild.module.css'

const NestedChild2 = () => {
  const themeContext = useContext(ThemeContext)
  const { darkTheme } = themeContext

  return (
    <div className={darkTheme ? styles.dark : styles.light}>
      <div className={styles['nested-child']}>
      </div>
    </div>
 )
}

export default NestedChild2`

export const mkdContextObject = `export const ThemeContext = React.createContext({
	darkTheme: false,
	toggleTheme: () => {},
})`

export const mkdContextProvider = `const ThemeContextProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(false)
	const handleToggle = () => {
		setIsDark((prev) => !prev)
	}
	return (
		<ThemeContext.Provider
			value={{ darkTheme: isDark, toggleTheme: handleToggle }}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider`

export const mkdUseContextNav = `import { ThemeContext } from './Context'

const Nav = () => {
	const themeContext = useContext(ThemeContext)
	const { darkTheme, toggleTheme } = themeContext

	return (
		<div className={styles.nav}>
			<FullTag name={'Nav'} />
			<div>
				<button onClick={toggleTheme} className={styles['theme-button']}>
					Change theme to : {darkTheme ? 'Light' : 'Dark'}
				</button>
			</div>
		</div>
	)
}`

export const mkdUseContextChild = `import React, { useContext } from 'react'
import { ThemeContext } from './Context'

const FirstChild = () => {
  const themeContext = useContext(ThemeContext)
  const { darkTheme } = themeContext

  return (
    <div className={darkTheme ? styles.dark : styles.light}>
      <div className={styles['first-child']}>
        <p>{'<FirstChild />'}</p>
      </div>
    </div>
  )
}`
