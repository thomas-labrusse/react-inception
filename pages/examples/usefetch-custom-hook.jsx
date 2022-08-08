import App from '../../components/demos/usefetch/App'

import {
	SandpackProvider,
	SandpackCodeEditor,
} from '@codesandbox/sandpack-react'
import SandpackView from '../../components/layout/page/SandpackView'
import PageEnd from '../../components/layout/page/PageEnd'

import {
	mkdApp,
	mkdUseFetch,
	mkdUseFetch1,
	mkdUseFetch2,
	mkdUseFetch3,
	mkdUseFetch4,
	mkdUseFetch5,
	mkdApp1,
	mkdApp2,
} from '../../public/markdowns/useFetchMkd'

const UseFetch = () => {
	return (
		<div>
			<h1>useFetch custom hook</h1>
			<p>
				{
					'React allows us to create our own hooks. Here is a simple example of a '
				}{' '}
				<span className='code'>useFetch</span>{' '}
				{
					' custom hook that allows to make a GET request to a url, with a loading and error state.'
				}
			</p>
			<p>
				{'Our'} <span className='code'>useFetch</span>{' '}
				{'custom hook allows to trigger a fetch via'}{' '}
				<span className='code'>useEffect</span>{' '}
				{'whenever the url changes, but it also uses'}{' '}
				<span className='code'>useState</span>{' '}
				{
					"to hold the response data, a loading and an error state. In the example below the 'next fetch' button simply changes an index state to select a new url to fetch. The fetch is triggered by the "
				}{' '}
				<span className='code'>useFetch</span> {' custom hook via the '}{' '}
				<span className='code'>useEffect</span> {'hook.'}
			</p>
			<div className='app-container'>
				<App />
			</div>
			<SandpackProvider
				template='react'
				files={{
					'/App.js': mkdApp,
					'/useFetch.js': mkdUseFetch,
				}}
				options={{
					visibleFiles: ['/App.js', '/useFetch.js'],
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
			<h2>custom hook implementation</h2>
			<p>
				{
					'Custom hook are, as their name implies, highly customizable, hence without rigid rules to implement them. They are nonetheless a few guidlines to follow when creating a custom hook:'
				}
			</p>
			<div className='smb'>
				<ul>
					<li>
						{
							"Custom hooks, just like any React hook must respect the 'rules of hooks' : be called at the top of React function components, never within other hooks."
						}
					</li>
					<li>
						{'They can however contain one or multiple hooks. In our example, '}{' '}
						<span className='code'>useEffect</span>{' '}
						<span className='code'>useState</span> {' and '}
						<span className='code'>useCallback</span>
						{'.'}
					</li>
					<li>
						{
							"As a naming convention, a custom hook should start with 'use'. This convention helps to respect the rules mention above, checked by static code analyzing tools like eslint."
						}
					</li>
					<li>
						{
							"A custom hook doesn't necessarily has to return anyting, but if it does, use 'return' at the end of it to return a value, data hold in state, or a function for instance."
						}
					</li>
				</ul>
			</div>
			<p className='note'>
				{
					'Note : The ability to use other hooks is really where reside the true power of custom hooks. A custom hook not using built-in React hooks would essentially be a helper function.'
				}
			</p>
			<h2>useFetch code breakdown</h2>
			<p>
				{
					"A custom hook syntax is exactly the same as a function's syntax. We name ours  "
				}{' '}
				<span className='code'>useFetch</span> {'passing an '}{' '}
				<span className='code'>options</span>
				{
					' param to it. That param is an object which only purpose is to allow the selection of the url queried with '
				}{' '}
				<span className='code'>options.url</span>
				{
					', but could be used for further query customization later on if need be.'
				}
			</p>
			<p>
				{'We then add state to our hook using '}{' '}
				<span className='code'>useState</span>
				{' to allow our custom hook to hold the '}{' '}
				<span className='code'>data</span> {' returned by the query, a '}{' '}
				<span className='code'>loading</span>{' '}
				{"state that will be 'true' until our fetch promise resolves, and an "}{' '}
				<span className='code'>error</span>{' '}
				{"state to hold the error object if the query doesn't go through."}
			</p>
			<SandpackView mkd={mkdUseFetch1} />
			<p>
				{'Then we write the '} <span className='code'>fetch</span>{' '}
				{'logic of our hook, using the fetch api, passing our '}{' '}
				<span className='code'>option.url</span>{' '}
				{' param into it, and setting our '}
				<span className='code'>data</span>{' '}
				{
					' state with the parsed response. We start and finish our function by setting the '
				}{' '}
				<span className='code'>loading</span>{' '}
				{
					" state to 'true' and finally 'false' when the promise is resolved. The logic also include an error handler that stores potential errors in the "
				}
				<span className='code'>error</span> {' state.'}
			</p>
			<p>
				{'Because we will use that function in a '}{' '}
				<span className='code'>useEffect</span> {'we wrap it in a '}{' '}
				<span className='code'>useCallback</span>
				{
					' to guarantee its reference equality and prevent unnecessary renders. We pass '
				}{' '}
				<span className='code'>options.url</span>{' '}
				{
					'as its only dependency because we want the function to be rebuilt whenever the queried url changes.'
				}
			</p>
			<SandpackView mkd={mkdUseFetch2} />
			<p>
				{'So far our '} <span className='code'>fetchData</span>
				{
					' function allows us to trigger our query on demand, with an event handler for instance, but we also want it to be triggered every time we select a different url, as a side effect. We therefore include a'
				}{' '}
				<span className='code'>useEffect</span>{' '}
				{' to our custom hook, simply triggering the '}{' '}
				<span className='code'>fetchData</span>{' '}
				{
					' function whenever the function changes. Meaning every time the url changes, thanks to our'
				}{' '}
				<span className='code'>useCallback</span>
				{' and its dependency.'}
			</p>
			<SandpackView mkd={mkdUseFetch3} />
			<p>
				{'We also include a simple function to reset our '}{' '}
				<span className='code'>error</span>
				{' state.'}
			</p>
			<SandpackView mkd={mkdUseFetch4} />
			<p>
				{'And finally we return the '} <span className='code'>data</span>,{' '}
				<span className='code'>loading</span>
				{' and'} <span className='code'>error</span>
				{' state and the '} <span className='code'>fetchData</span> and{' '}
				<span className='code'>resetError</span>
				{
					' functions that will be made available whenever we call our custom hook.'
				}
			</p>
			<SandpackView mkd={mkdUseFetch5} />
			<h2>using our useFetch custom hook</h2>
			<p>
				{
					"Now using our custom hook is fairly straighforward. We simply import it in our component, and call it like we would call a regular React hook. We pass an object to it (the 'options') with a "
				}{' '}
				<span className='code'>url</span>{' '}
				{
					' key. We destructure the values returned by our hook, using only the one we need.'
				}
			</p>
			<SandpackView mkd={mkdApp1} />
			<p>
				{'Now our component has access to the '}{' '}
				<span className='code'>data</span>{' '}
				{' returned by the query, itself triggered by the '}{' '}
				<span className='code'>useEffect</span>{' '}
				{
					' whenever the url changes. But we can also display the loading status, the error if any, and have a direct access to functions, like '
				}{' '}
				<span className='code'>fetchData</span>{' '}
				{' for instance, that we can attach to event handlers.'}
			</p>
			<SandpackView mkd={mkdApp2} />
			<PageEnd link={'/examples/usefetch-custom-hook'} />
		</div>
	)
}

export default UseFetch
