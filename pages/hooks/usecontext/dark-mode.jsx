import App from '../../../components/usecontext/darkmode/App'

import {
	SandpackProvider,
	SandpackCodeEditor,
} from '@codesandbox/sandpack-react'

import {
	mkdApp,
	mkdFirstChild,
	mkdSecondChild,
	mkdContext,
	mkdNav,
	mkdNested1,
	mkdNested2,
	mkdParent,
	mkdAppCss,
	mkdNavCss,
	mkdParentCss,
	mkdChildCss,
	mkdNestedChildCss,
} from '../../../markdowns/darkModeMkd'

const DarkMode = () => {
	return (
		<div>
			<h2>Dark mode with useContext</h2>
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
					'/NestedChild1.js': mkdNested1,
					'/NestedChild2.js': mkdNested2,
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
						'/SecondChild.js',
						'/NestedChild1.js',
						'/NestedChild2.js',
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
			<p>some content</p>
		</div>
	)
}

export default DarkMode
