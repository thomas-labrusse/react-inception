import React from 'react'
import Link from 'next/link'
import {
	SandpackProvider,
	SandpackCodeEditor,
} from '@codesandbox/sandpack-react'

import App from '../../components/demos/language/App'
import Caption from '../../components/layout/page/Caption'
import SandpackView from '../../components/layout/page/SandpackView'

import {
	mkdContext,
	mkdApp,
	mkdNav,
	mkdParent,
	mkdFirstChild,
	mkdSecondChild,
	mkdContextObject,
	mkdContextProvider,
	mkdAppContextProvider,
	mkdUseContextNav,
	mkdUseContextChild,
} from '../../markdowns/languagePreferenceMkd'

const LanguagePreference = () => {
	return (
		<div>
			<h1>Language preference with useContext</h1>
			<p>
				This is the second example of implementation of useContext. If you need
				more explanation on how to use Context with hooks in React, have a look
				at this page :{' '}
				<Link href={'/demos/dark-mode'}>
					<a className='link'>dark mode with useContext</a>
				</Link>
				.
			</p>
			<p>
				{
					"In this example we manage the user language preference via the Context API. In this tiny app, we want some component to have access to the current preferred language. Our Parent component for instance doesn't care about language since it's not displaying any text content. With context, we allow nested component to access that data directly, without having to props drilling through ancestors."
				}
			</p>
			<App />
			<Caption
				text={
					'Each component has a render counter next to its name, that flashes and increments whenever it re-renders. Play around with it to see how our implementation impacts each component.'
				}
			/>
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
			<h2>useContext implementation</h2>
			<p>
				The prefered language is stored in the context object, and accessed by
				consumer components with <span className='code'>useContext</span>, to
				render the content in the desired language.
			</p>
			<p>The 4 steps Context implementation :</p>
			<div className='smb'>
				<ul>
					<li>
						{'1) Create a context object with'}{' '}
						<span className='code'>React.createContext</span>
					</li>
					<li>
						{'2) Create a context provider with'}{' '}
						<span className='code'>{'<SomeContext.Provider>'}</span>
						{' including state and methods.'}
					</li>
					<li>
						{
							'3) Wrap the consumer components that need access to our context values and methods.'
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
					"passing a default value to it. In our example, we pass an object with a 'language' value that will be controlled by a 'selectLanguage' method."
				}
			</p>
			<SandpackView mkd={mkdContextObject} />
			<p className='note'>
				{
					'Note : we immediatly export this context object, because we will have to pass it into the '
				}{' '}
				<span className='code'>useContext</span>
				{' hook in our consumer components. '}
			</p>
			<h3>Step 2 : Creating a context provider with context.provider</h3>
			<p>
				{
					"To share our context values through the component tree, we create a component, a 'context provider' that will wrap all our consumer components. To do so we use our "
				}{' '}
				<span className='code'>ThemeContext</span>{' '}
				{' created in the previous step, and add '}
				<span className='code'>.Provider</span> {'next to it.'}
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
				<span className='code'>selectedLanguage</span>
				{' state and a '}
				<span className='code'>handleSelectLanguage()</span>
				{' function that allows to modify the state to the desired language.'}
			</p>
			<SandpackView mkd={mkdContextProvider} />
			<p className='note'>
				{
					'Note : we create our context provider inside a component that holds a state, because we want our context values to change. The component also includes a function to change that state, otherwise our context value would be static.'
				}
			</p>
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
					<span className='code'>LanguageContext</span>).
				</li>
				<li>
					Calling <span className='code'>useContext</span> and passing the
					context object into it.
				</li>
				<li>
					Accessing the context values and methods (
					<span className='code'>language</span> and{' '}
					<span className='code'>selectLanguage</span>). In the examples below,
					by destructuring the object return by{' '}
					<span className='code'>useContext</span>.
				</li>
			</ul>
			<p>
				In the Nav component to access the{' '}
				<span className='code'>selectLanguage</span> method and the current{' '}
				<span className='code'>language</span>. A simple{' '}
				<span className='code'>select/option</span> input allows the user to
				select her preferred language :
			</p>
			<SandpackView mkd={mkdUseContextNav} />
			<p>
				In a child component, to have access to the current value and
				conditionally render the right content:
			</p>
			<SandpackView mkd={mkdUseContextChild} />
			<h2>Optimizations</h2>
			<p>
				When the context values change, all consumer components{' '}
				<strong>reading</strong> thoses values with{' '}
				<span className='code'>useState</span>
				{
					" will re-render. In our example, notice how the Nav, FirstChild and SecondChild components rerender whenever we change the preferred language, but the Parent component doesn't."
				}
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

export default LanguagePreference
