import React from 'react'
import {
	SandpackProvider,
	SandpackCodeEditor,
} from '@codesandbox/sandpack-react'

import App from '../../../components/demos/language/App'

import {
	mkdContext,
	mkdApp,
	mkdNav,
	mkdParent,
	mkdFirstChild,
	mkdSecondChild,
} from '../../../markdowns/languagePreferenceMkd'

const LanguagePreference = () => {
	return (
		<div>
			<h2>Language preference with useContext</h2>
			<App />
			<SandpackProvider
				template='react'
				files={{
					'/Context.js': mkdContext,
					'/App.js': mkdApp,
					'/Nav.js': mkdNav,
					'/Parent.js': mkdParent,
					'/FirstChild.js': mkdFirstChild,
					'/SecondChild.js': mkdSecondChild,
				}}
				options={{
					visibleFiles: [
						'/Context.js',
						'/App.js',
						'/Nav.js',
						'/Parent.js',
						'/FirstChild.js',
						'/SecondChild.js',
					],
				}}
				theme='auto'
			>
				<SandpackCodeEditor
					showTabs={true}
					showLineNumbers={true}
					readOnly={true}
					showReadOnly={false}
					wrapContent={true}
				/>
			</SandpackProvider>
		</div>
	)
}

export default LanguagePreference
