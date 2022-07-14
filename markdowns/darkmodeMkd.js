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

  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <div className={styles.nav}>
      <div>
        <button onClick={handleToggle} className={styles['theme-button']}>
          Change theme to : {darkTheme ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  )
}

export default Nav

`

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

export const mkdAppCss = `
.app {
  display: flex;
  flex-direction: column;
  width: 600px;
  border: 3px dashed black;
}

.components-container {
  padding: 20px 10px 10px 10px;
}
`

export const mkdNavCss = `
.nav {
  background-color: burlywood;
  border-left: solid 1px black;
  border-top: solid 1px black;
  border-right: solid 1px black;
  border-radius: 5px 5px 0px 0px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.theme-button {
  border: none;
  padding: 5px;
  border-radius: 100px;
}
`
export const mkdChildCss = `
.child {
  width: 180px;
  height: 180px;
  border-radius: 5px;
  padding: 5px;
}

.second-child {
  background-color: white;
  width: 360px;
  height: 180px;
  border: 1px black dashed;
  border-radius: 5px;
  padding: 5px;
}

.nested-children-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;
  margin-top: 10px;
}

.light {
  color: #222222;
  background-color: #fff;
  border: 1px black dashed;
  border-radius: 5px;
  transition: all 0.2s;
}

.dark {
  color: #f1f1f1;
  background-color: #222222;
  border: 1px #f1f1f1 dashed;
  border-radius: 5px;
  transition: all 0.2s;
}
`

export const mkdParentCss = `
.parent {
  background-color: lightgray;
  border: solid 1px black;
  border-radius: 0px 0px 5px 5px;
  padding: 5px;
  height: 250px;
}

.children-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
`

export const mkdNestedChildCss = `
.nested-child {
  width: 140px;
  height: 140px;
  border-radius: 5px;
}

.light {
  color: #222222;
  background-color: #fff;
  border: 1px black dashed;
  border-radius: 5px;
  transition: all 0.2s;
}

.dark {
  color: #f1f1f1;
  background-color: #222222;
  border: 1px #f1f1f1 dashed;
  border-radius: 5px;
  transition: all 0.2s;
}
`
