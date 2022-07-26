import App from '../../components/demos/usefetch/App'

import {
	SandpackProvider,
	SandpackCodeEditor,
} from '@codesandbox/sandpack-react'
import SandpackView from '../../components/layout/page/SandpackView'

import { mkdApp, mkdUseFetch } from '../../markdowns/useFetchMkd'

const UseFetch = () => {
	return (
		<div>
			<h1>useFetch custom hook</h1>
			<p>
				{
					'React allows us to create our own hooks. Here is a simple example of a fetch custom hook that allows to make a GET request to a url, with a loading state and and error state.'
				}
			</p>
			<p>
				{'Our'} <span className='code'>useFetch</span>{' '}
				{'custom hook allows to trigger a fetch via'}{' '}
				<span className='code'>useEffect</span>{' '}
				{'whenever the url changes, but it also uses'}{' '}
				<span className='code'>useState</span>{' '}
				{
					"to hold the response data, a loading and an error state. In the example below the 'next fetch' button simply changes an index state to select a new url to fetch. The fetch is triggered by the useFetch custom hook via a "
				}{' '}
				<span className='code'>useEffect</span> {'hook.'}
			</p>
			<App />
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
		</div>
	)
}

export default UseFetch
