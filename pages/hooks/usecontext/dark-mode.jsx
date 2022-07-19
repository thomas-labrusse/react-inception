import App from '../../../components/usecontext/darkmode/App'

import {
	SandpackProvider,
	SandpackCodeEditor,
	SandpackCodeViewer,
} from '@codesandbox/sandpack-react'

import Caption from '../../../components/layout/page/Caption'
import SandpackView from '../../../components/layout/page/SandpackView'

import {
	mkdApp,
	mkdFirstChild,
	mkdSecondChild,
	mkdContext,
	mkdNav,
	mkdNested1,
	mkdNested2,
	mkdParent,
	mkdContextObject,
	mkdContextProvider,
	mkdUseContextNav,
	mkdUseContextChild,
} from '../../../markdowns/darkModeMkd'

const DarkMode = () => {
	return (
		<div>
			<h1>Dark mode with useContext</h1>
			<p>
				{
					"With the useContext hooks, we're able to share data and/or methods between different components (children, siblings, deeply nested) without having to pass down props through the entire components tree."
				}
			</p>
			<p>
				In the example below, we implement a small dark mode feature that allows
				the user to toggle the website theme. Because the useContext hooks
				allows to cherry pick what component will be accessing a particular
				state, its a perfect candidate for that kind of job.
			</p>
			<App />
			<Caption
				text={
					'Each component has a render counter next to its name, that flashes and increments whenever it re-renders. Play around with it to see how our implementation impacts each component.'
				}
			></Caption>
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
			<h2>useContext implementation</h2>
			<p>
				{
					"Instead of having a state at the uppermost level of the App, and having to pass it down all the way to the deepest components, we access the 'dark' or 'light' theme wherever we need it."
				}
			</p>
			<p>useContext is implemented in 3 steps :</p>
			<div className='smb'>
				<ul>
					<li>Creating a context object.</li>
					<li>
						Creating a context provider with state, and wrapping the components
						that need access to it.
					</li>
					<li>
						Call useContext in any component requiring the state and methods
						provided by the provider.
					</li>
				</ul>
			</div>
			<h3>Creating a context object, with createContext</h3>
			<p>
				The context object will hold the value we want to share between
				components. To create one, we use React.createContext passing a default
				value to it. In our case, we pass an object with a{' '}
				<span className='code'>darkTheme</span> value (boolean) value that will
				be toggle by a toggleTheme method.
			</p>
			<SandpackView mkd={mkdContextObject} />
			<h3>Creating a context provider with context.provider</h3>

			<SandpackView mkd={mkdContextProvider} />
			<h3>Using the context value in a component, with useContext</h3>
			<p>In the Nav component to access the theme toggle method only.</p>
			<SandpackView mkd={mkdUseContextNav} />
			<p>In a child component, to have access to the current value.</p>
			<SandpackView mkd={mkdUseContextChild} />
		</div>
	)
}

export default DarkMode
