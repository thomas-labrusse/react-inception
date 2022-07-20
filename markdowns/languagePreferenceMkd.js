export const mkdContext = `import React, { useState } from 'react'

export const LanguageContext = React.createContext({
  language: 'en',
  selectLanguage: () => {},
})

const LanguageContextProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')

  const handleSelectLanguage = (lang) => {
    setSelectedLanguage(lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        language: selectedLanguage,
        selectLanguage: handleSelectLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider`

export const mkdApp = `import React from 'react'
import styles from '../App.module.css'

import Parent from './Parent'
import Nav from './Nav'

import LanguageContextProvider from './Context'

const App = () => {
  return (
    <LanguageContextProvider>
      <div className={styles.app}>
        <div className={styles['components-container']}>
          <Nav/>
          <Parent/>
        </div>
      </div>
    </LanguageContextProvider>
  )
}

export default App`

export const mkdNav = `import React, { useContext } from 'react'
import styles from '../Nav.module.css'

import { LanguageContext } from './Context'

const Nav = () => {
  const languageContext = useContext(LanguageContext)
  const { language, selectLanguage } = languageContext

  const handleSelect = (e) => {
    selectLanguage(e.target.value)
  }

  return (
    <div className={styles.nav}>
      <div>
        <select
          name='lang'
          id='lang'
          value={language}
          onChange={handleSelect}
          defaultValue='en'
        >
          <option value='en'>english</option>
          <option value='fr'>français</option>
          <option value='es'>español</option>
          <option value='ja'>日本語</option>
        </select>
      </div>
    </div>
  )
}

export default Nav`

export const mkdParent = `import React from 'react'
import styles from '../Parent.module.css'

import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

const Parent = () => {
  return (
    <div className={styles.parent}>
      <div className={styles['children-container']}>
        <FirstChild />
        <SecondChild />
      </div>
    </div>
  )
}

export default Parent`

export const mkdFirstChild = `import React, { useContext } from 'react'
import styles from '../Child.module.css'

import { LanguageContext } from './Context'

const Child = () => {
  const languageContext = useContext(LanguageContext)
  const { language } = languageContext

  const content = {
    en: 'Welcome',
    fr: 'Bienvenue',
    es: 'Hola',
    ja: 'おはようございます',
  }

  return (
    <div className={styles.light}>
      <div className={styles.child}>
        <p>{content[language]}</p>
      </div>
    </div>
  )
}

export default Child`

export const mkdSecondChild = `import React, { useContext } from 'react'
import styles from '../Child.module.css'

import { LanguageContext } from './Context'

const Child = () => {
  const languageContext = useContext(LanguageContext)
  const { language } = languageContext

  const content = {
    en: 'How are you ?',
    fr: 'Comment ça va ?',
    es: 'Como estas ?',
    ja: 'げんきですか。',
  }

  return (
    <div className={styles.light}>
      <div className={styles.child}>
        <p>{content[language]}</p>
      </div>
    </div>
  )
}

export default Child`

export const mkdContextObject = `export const LanguageContext = React.createContext({
  language: 'en',
  selectLanguage: () => {},
})`

export const mkdContextProvider = `const LanguageContextProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')

  const handleSelectLanguage = (lang) => {
    setSelectedLanguage(lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        language: selectedLanguage,
        selectLanguage: handleSelectLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}`

export const mkdAppContextProvider = `const App = () => {
  return (
    <LanguageContextProvider>
      <Nav/>
      <Parent/>
    </LanguageContextProvider>
  )
}`

export const mkdUseContextNav = `import React, { useContext } from 'react'

import { LanguageContext } from './Context'

const Nav = () => {
  const languageContext = useContext(LanguageContext)
  const { language, selectLanguage } = languageContext

  const handleSelect = (e) => {
    selectLanguage(e.target.value)
  }

  return (
      <div>
        <select
          name='lang'
          id='lang'
          value={language}
          onChange={handleSelect}
          defaultValue='en'
        >
          <option value='en'>english</option>
          <option value='fr'>français</option>
          <option value='es'>español</option>
          <option value='ja'>日本語</option>
        </select>
      </div>
  )
}`

export const mkdUseContextChild = `import React, { useContext } from 'react'

import { LanguageContext } from './Context'

const Child = () => {
  const languageContext = useContext(LanguageContext)
  const { language } = languageContext

  const content = {
    en: 'Welcome',
    fr: 'Bienvenue',
    es: 'Hola',
    ja: 'おはようございます',
  }

  return (
        <p>{content[language]}</p>
  )
}`
