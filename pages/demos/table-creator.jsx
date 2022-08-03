import React from 'react'
import Link from 'next/link'

import {
	SandpackProvider,
	SandpackCodeEditor,
} from '@codesandbox/sandpack-react'

import App from '../../components/demos/tablecreator/App'
import Caption from '../../components/layout/page/Caption'
import SandpackView from '../../components/layout/page/SandpackView'

import {
	mkdApp,
	mkdReducer,
	mkdTable,
	mkdCell,
} from '../../markdowns/tableCreatorMkd'

const TableCreator = () => {
	return (
		<>
			<h1>Table Creator with useReducer</h1>
			<p>
				{' This is the second example of implementation of '}
				<span className='code'>useReducer</span>
				{', focusing this time on state initialization. '}
				{
					'If you need more explanation on how to use the reducer hook in React, have a look at this page : '
				}
				<Link href={'/demos/chess-clock'}>
					<a className='link'>Chess Clock with useReducer</a>
				</Link>
				.
			</p>
			<p>
				{
					'Our tiny demo app below simply allows to create an editable table. The important part of this example is that the table is created based on user input: either a 2x2 or a 3x3 table. We achieve this by initializing our '
				}{' '}
				<span className='code'>useReducer</span>
				{' state with an initializer function.'}
			</p>
			<div className='app-container'>
				<App />
				<Caption
					text={
						'Each component has a render counter next to its name, that flashes and increments whenever it re-renders. Play around with it to see how our implementation impacts each component.'
					}
				/>
			</div>
			<SandpackProvider
				template='react'
				files={{
					'/App.js': mkdApp,
					'/reducer.js': mkdReducer,
					'/Table.js': mkdTable,
					'/Cell.js': mkdCell,
				}}
				options={{
					visibleFiles: ['/App.js', '/reducer.js', '/Table.js', '/Cell.js'],
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
		</>
	)
}

export default TableCreator
