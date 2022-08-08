import React from 'react'
import Link from 'next/link'

import {
	SandpackProvider,
	SandpackCodeEditor,
} from '@codesandbox/sandpack-react'

import App from '../../components/demos/tablecreator/App'
import Caption from '../../components/layout/page/Caption'
import SandpackView from '../../components/layout/page/SandpackView'
import PageEnd from '../../components/layout/page/PageEnd'

import {
	mkdApp,
	mkdReducer,
	mkdTable,
	mkdCell,
	mkdInitializer,
	mkdUseReducer,
	mkdUseReducerNoInitializer,
	mkdHandler,
	mkdReducer1,
} from '../../public/markdowns/tableCreatorMkd'

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
				<Link href={'/examples/chess-clock'}>
					<a className='link'>Chess Clock with useReducer</a>
				</Link>
				.
			</p>
			<p>
				{
					'Our tiny demo app below simply allows to create an editable table with custom number of columns and rows. The important part of this example is that the initial table is created based on user input: either a 2x2 or a 3x3 cells table. We achieve this by initializing our '
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
			<h2>useReducer implementation</h2>
			<p>
				{'As a quick reminder, here are the 3 steps to implement '}{' '}
				<span className='code'>useReducer</span>
				{', for more details have a look at '}
				<Link href={'/examples/chess-clock'}>
					<a className='link'>this page</a>
				</Link>
				{'.'}
			</p>
			<div className='smb'>
				<ul>
					<li>
						{'1) Call '}
						<span className='code'>useReducer</span>{' '}
						{'in your component, passing a '}{' '}
						<span className='code'>reducer</span> {' and an '}
						<span className='code'>initial state</span>{' '}
						{
							' to it. In our case we will pass an initializer function and an argument to that function to build the state dynamically.'
						}
					</li>
					<li>
						{'2) In your event handlers, call '}{' '}
						<span className='code'>dispatch</span>
						{
							' passing an object to it, describing the action the user is looking for.'
						}
					</li>
					<li>
						{'3) Write the '}
						<span className='code'>reducer</span>
						{' function including all the state update logics.'}
					</li>
				</ul>
			</div>
			<h3>Initializing our useReducer state dynamically</h3>
			<p>
				{'In our previous example, we initialized our state in '}{' '}
				<span className='code'>useReducer</span> {' by passing an '}{' '}
				<span className='code'>initialState</span>{' '}
				{' object as the second argument of our hook.'}
			</p>
			<SandpackView mkd={mkdUseReducerNoInitializer} />
			<p>
				{
					'To initialize that state dynamically - in our example allowing the user to start with a 2x2 or a 3x3 table - we now pass an'
				}{' '}
				<span className='code'>initializeState</span>{' '}
				{'function as a third argument, and a '}{' '}
				<span className='code'>format</span>{' '}
				{'argument to that function as a second argument.'}
			</p>
			<SandpackView mkd={mkdUseReducer} />
			<p>
				{'When we define our '} <span className='code'>initializeState</span>{' '}
				{' function, it will therefore accept a'}{' '}
				<span className='code'>format</span>{' '}
				{
					'argument, and conditionally return an initial state with two or three columns and rows.'
				}
			</p>
			<SandpackView mkd={mkdInitializer} />
			<p className='note'>
				{
					'Note : by pointing to the initializer function and not calling it directly, the function will run only once when the component mounts.'
				}
			</p>
			<h3>Creating handlers with dispatch and writting our reducer</h3>
			<p>
				{'We create our handlers by passing a '}{' '}
				<span className='code'>dispatch</span>{' '}
				{' function, giving it an object with a '}{' '}
				<span className='code'>type</span>{' '}
				{
					' property on which we assign the action name. We also pass any necessary properties to it, to properly update the state.'
				}
			</p>
			<SandpackView mkd={mkdHandler} />
			<p>
				{
					'Finally we create our reducer function to dispatch all actions. To do so we use a conditional format with a'
				}{' '}
				<span className='code'>switch/case</span>{' '}
				{
					' pattern. For each action, we return the new state to trigger a new component/UI update.'
				}
			</p>
			<SandpackView mkd={mkdReducer1} />
			<p className='note'>
				{'Note : just like a regular state update with'}{' '}
				<span className='code'>useState</span>
				{
					' we avoid at all cost to directly mutate the state. Here because we are manipulating an array, we avoid using methods like '
				}{' '}
				<span className='code'>push</span>, <span className='code'>shift</span>{' '}
				, <span className='code'>splice</span>{' '}
				{
					' and prefer to use the spread syntax or methods returning a new array.'
				}
				{' A rule of thumb is to always treat the state as read-only.'}
			</p>
			<PageEnd link={'/examples/table-creator'} />
		</>
	)
}

export default TableCreator
