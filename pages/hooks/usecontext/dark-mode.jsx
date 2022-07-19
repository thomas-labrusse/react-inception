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
	mkdAppContextProvider,
} from '../../../markdowns/darkModeMkd'

const DarkMode = () => {
	return (
		<div>
			<h1>Dark mode with useContext</h1>
			<p>
				{'With the '} <span className='code'>useContext</span>
				{
					" hooks, we're able to share data and/or methods between different components (children, siblings, deeply nested) without having to pass down props through the entire components tree."
				}
			</p>
			<p>
				{
					'In the example below, we implement a small dark mode feature that allows the user to toggle the website theme. Because the '
				}
				<span className='code'>useContext</span>{' '}
				{
					'hooks allows to cherry pick what component will be accessing a particular state, its a perfect candidate for that kind of job.'
				}
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
			<p>The 4 steps Context implementation :</p>
			<div className='smb'>
				<ul>
					<li>
						{'1) Create a context object with'}{' '}
						<span className='code'>useContext</span>
					</li>
					<li>
						{'2) Create a context provider with'}{' '}
						<span className='code'>SomeContext.Provider</span>
						{' including state and methods.'}
					</li>
					<li>
						{
							'3) Wrap the consumer components that need access to our context value and methods.'
						}
					</li>
					<li>
						{'4) Call '} <span className='code'>useContext</span>{' '}
						{'in any consumer component.'}
					</li>
				</ul>
			</div>
			<h3>Step 1 : Creating a context object, with createContext</h3>
			<p>
				{
					'The context object will hold the value we want to share between components. To create one, we use '
				}{' '}
				<span className='code'>React.createContext</span>{' '}
				{
					'passing a default value to it. In our case, we pass an object with a darkTheme value (boolean) that will be controlled by a toggleTheme method.'
				}
			</p>
			<SandpackView mkd={mkdContextObject} />
			<h3>Step 2 : Creating a context provider with context.provider</h3>
			<p>
				{
					"The context provider litteraly allows us to 'provide' the value of the context object to other components (our consumers). To do so we create that provider within a component that also includes a state (using"
				}{' '}
				<span className='code'>useState</span>
				{') and a way to control its value.'}
			</p>
			<p className='note'>
				{'Note : '} <span className='code'>ThemeContext.Provider</span>{' '}
				{
					"could be used directly, without linking its value to a state, but then the darkTheme value would never changed, and remain 'false'."
				}
			</p>
			<p>
				{'The '} <span className='code'>ThemeContext.Provider</span>{' '}
				{'takes a '}
				<span className='code'>value</span>
				{' props that will be passed to components calling '}
				<span className='code'>useContext</span>
				{
					'. In our case we want the value to be dynamic so we make it points to a '
				}{' '}
				<span className='code'>isDark</span>
				{' state and a '}
				<span className='code'>handleToggle()</span>
				{
					" function that allows to toggle that state between 'true' and 'false'."
				}
			</p>
			<SandpackView mkd={mkdContextProvider} />
			<h3> Step 3 : Wrap our component with the provider</h3>
			<p>
				In their common ancestor, we wrap all components that need our Context,
				with our context provider.
			</p>
			<SandpackView mkd={mkdAppContextProvider} />
			<p className='note'>
				{
					"Note : the common ancestor will not have access to our context, only its descendents will. Wrapping all consumer components in 'App'  will not make the context values available in 'App'."
				}
			</p>

			<p className='note'>
				{
					'Note : aim to wrap with the provider at the common ancestor level, not the topmost level of your app.'
				}
			</p>
			<h3> Step 4 : Using the context value in a component, with useContext</h3>
			<p>
				Finally we can access our context values in our consumer components.
				This is done by :
			</p>
			<ul>
				<li>
					Importing our context object (
					<span className='code'>ThemeContext</span>).
				</li>
				<li>
					Calling <span className='code'>useContext</span> and passing the
					context object into it.
				</li>
				<li>
					Accessing the context values and methods (
					<span className='code'>darkTheme</span> and{' '}
					<span className='code'>toggleTheme</span>). In the examples below, by
					destructuring the object return by{' '}
					<span className='code'>useContext</span>.
				</li>
			</ul>
			<p>
				In the Nav component to access the theme toggle method and the current
				theme.
			</p>
			<SandpackView mkd={mkdUseContextNav} />
			<p>In a child component, to have access to the current value.</p>
			<SandpackView mkd={mkdUseContextChild} />
			<h2>Optimizations</h2>
			<p>
				When the context values change, all consumer components{' '}
				<strong>reading</strong> thoses values with
				<span className='code'>useState</span>
				{' will re-render.'}
			</p>
			<p className='note'>
				{'Note : only the components reading the context values with '}{' '}
				<span className='code'>useContext</span>
				{
					' will rerender, not all components wrapped by the context provider. For instance the '
				}{' '}
				<span className='code'>SecondChild</span>
				{' and the '} <span className='code'>NestedChild1</span>
				{
					' components in the example at the top of this page, do not rerender, even though they are part of the tree wrapped by the context provider. Test this by toggling the theme and observing the render counters.'
				}
			</p>
			<p className='note'>
				{
					'Note : Like in any React app, a component re-rendering will also force all its children to re-render as well. In our example, the '
				}
				<span className='code'>DeeplyNested</span>
				{' component re-renders, not because it access the theme context with '}
				<span className='code'>useContext</span>
				{" but because it's a child of "}{' '}
				<span className='code'>NestedChild2</span>
			</p>
			<p>Optimization strategies when using the Context API :</p>
			<ul>
				<li>
					<strong>Memoize at the provider level</strong>. In your context
					provider component, memoize values with the{' '}
					<span className='code'>useMemo</span> hook, and functions with the{' '}
					<span className='code'>useCallback</span> hook. That optimization is
					relevant if your context object changes regularly (for instance if the
					data it holds is frequently fetched).
				</li>
				<li>
					<strong>Memoize at the consumer level</strong>. When all context
					values are not required at the consumer component level, memoize the
					used values to avoid unnecessary re-renders. This is done by using the{' '}
					<span className='code'>useMemo</span> hook.
				</li>
				<li>
					<strong>Split contexts</strong>. Instead of having a single context
					provider with all the values you need to pass on to consumer
					components (ex: theme, authentication status, language preference,
					etc.), split each into a specific provider.
				</li>
			</ul>
		</div>
	)
}

export default DarkMode
