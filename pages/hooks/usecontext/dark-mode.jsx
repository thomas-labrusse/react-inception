import App from '../../../components/usecontext/darkmode/App'
// import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import {
	Sandpack,
	SandpackProvider,
	SandpackLayout,
	SandpackCodeViewer,
} from '@codesandbox/sandpack-react'

import {
	mkdAppComponent,
	mkdFirstChildComponent,
	mkdSecondChildComponent,
	mkdContextComponent,
	mkdNavComponent,
	mkdNested1Component,
	mkdNested2Component,
	mkdParentComponent,
	mkdAppCss,
	mkdNavCss,
	mkdParentCss,
	mkdChildCss,
	mkdNestedChildCss,
} from '../../../markdowns/darkmodeMkd'

const DarkMode = () => {
	return (
		<div>
			<h2>Dark mode with useContext</h2>
			<App />
			<SandpackProvider
				template='react'
				files={{
					'/Context.js': mkdContextComponent,
					'/App.js': mkdAppComponent,
					'/Nav.js': mkdNavComponent,
					'/Parent.js': mkdParentComponent,
					'/FirstChild.js': mkdFirstChildComponent,
					'/SecondChild.js': mkdSecondChildComponent,
					'/NestedChild1.js': mkdNested1Component,
					'/NestedChild2.js': mkdNested2Component,
					'/App.module.css': mkdAppCss,
					'/Nav.module.css': mkdNavCss,
					'/Parent.module.css': mkdParentCss,
					'/Child.module.css': mkdChildCss,
					'/NestedChild.module.css': mkdNestedChildCss,
				}}
				options={{
					visibleFiles: [
						'/Context.js',
						'/App.js',
						'/Nav.js',
						'/Parent.js',
						'/FirstChild.js',
					],
				}}
				theme='auto'
			>
				{/* <SandpackLayout theme='dark'> */}
				{/* <SandpackLayout theme='sandpackDark'> */}
				{/* <SandpackLayout theme='light'> */}
				<SandpackLayout>
					<SandpackCodeViewer
						showTabs={true}
						showLineNumbers={true}
						// wrapContent={true}
					/>
				</SandpackLayout>
			</SandpackProvider>
		</div>
	)
}

export default DarkMode
