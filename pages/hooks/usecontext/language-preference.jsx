import React from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'

import App from '../../../components/usecontext/language/App'

const LanguagePreference = () => {
	return (
		<div>
			<h2>Language preference with useContext</h2>
			<App />
			<Sandpack
				template='react'
				options={{
					readOnly: true,
				}}
			/>
		</div>
	)
}

export default LanguagePreference
