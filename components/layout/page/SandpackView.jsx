import React from 'react'
import {
	SandpackProvider,
	SandpackCodeViewer,
} from '@codesandbox/sandpack-react'

const SandpackView = ({ mkd }) => {
	return (
		<SandpackProvider
			template='react'
			files={{
				'/App.js': mkd,
			}}
			theme='auto'
		>
			<SandpackCodeViewer
				showTabs={false}
				readOnly={true}
				showReadOnly={false}
				wrapContent={true}
			/>
		</SandpackProvider>
	)
}

export default SandpackView
