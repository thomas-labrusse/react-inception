import React from 'react'

import App from '../../components/demos/chessclock/App'

import {
	SandpackProvider,
	SandpackCodeEditor,
} from '@codesandbox/sandpack-react'
import SandpackView from '../../components/layout/page/SandpackView'

import Caption from '../../components/layout/page/Caption'

import {
	mkdApp,
	mkdReducer,
	mkdTimer,
	mkdReducer1,
	mkdReducer2,
	mkdReducer3,
	mkdReducer4,
	mkdReducer5,
	mkdReducer6,
	mkdReducer7,
} from '../../markdowns/chessClockMkd'

const ChessClock = () => {
	return (
		<>
			<h1>Chess Clock app</h1>
			<p>
				{'A chess clock is a great demo use case for the '}{' '}
				<span className='code'>useReducer</span>
				{
					' hook. First, it requires to manage a slightly more complex state than a regular clock or timer, and '
				}
				<span className='code'>useReducer</span>{' '}
				{
					' helps us to do just that. And second, the game requires the players to do very specific actions (tap the clock, pause the game, reset the clock) that our reducer will describe in a very readable way.'
				}
			</p>
			<p>A chess clock simply works like this :</p>
			<div className='smb'>
				<ul>
					<li>
						{
							"Each player has a timer that runs whenever it's her turn to play."
						}
					</li>
					<li>
						{"When a player's timer runs, the other player's timer is stopped."}
					</li>
					<li>
						{
							"Once a player has made her move, she taps on her timer and it's the other player turn to play."
						}
					</li>
					<li>
						{
							'If a player runs out of time, the clock stops and the other player wins the game.'
						}
					</li>
					<li>
						{
							'We also want the players to be able to stop the clock if they need a break, and to reset the clock to start a new game.'
						}
					</li>
				</ul>
			</div>
			<App />
			<Caption
				text={
					'Each component has a render counter next to its name, that flashes and increments whenever it re-renders. Play around with it to see how our implementation impacts each component.'
				}
			/>
			<SandpackProvider
				template='react'
				files={{
					'/App.js': mkdApp,
					'/reducer.js': mkdReducer,
					'/Timer.js': mkdTimer,
				}}
				options={{
					visibleFiles: ['/App.js', '/reducer.js', '/Timer.js'],
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
				<span className='code'>useReducer</span>{' '}
				{' is often presented as an optional substitution for '}
				<span className='code'>useState</span>{' '}
				{
					" to update components state. But its implementation is slightly different and offers a few additional perks. You can move the state update logic out of your event handlers into centralized functions outside the component. It also allows very descriptive state update 'actions', for better developer readability. The tradeoff being that it requires a bit more upfront code."
				}
			</p>
			<p>
				{'They are 3 steps to implement '}{' '}
				<span className='code'>useReducer</span>
				{':'}
			</p>
			<div className='smb'>
				<ul>
					<li>
						{'1) Call '}
						<span className='code'>useReducer</span>{' '}
						{'in your component, passing a '}{' '}
						<span className='code'>reducer</span> {' and an '}
						<span className='code'>initial state</span> {' to it.'}
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
			<h3>Step 1 : Calling useReducer with a reducer and initial state.</h3>
			<p>
				{
					'The context object will hold the value we want to share between components. To create one, we use '
				}{' '}
				<span className='code'>React.createContext</span>{' '}
				{
					'passing a default value to it. In our case, we pass an object with a darkTheme value (boolean) that will be controlled by a toggleTheme method.'
				}
			</p>
			<SandpackView mkd={mkdReducer1} />
			<p>SOME PARAGRAPH</p>
			<SandpackView mkd={mkdReducer2} />
			<h3>
				Step 2 : Use dispatch functions in event handlers when state update are
				required.
			</h3>

			<p>SOME PARAGRAPH</p>
			<SandpackView mkd={mkdReducer3} />
			<p>SOME PARAGRAPH</p>
			<SandpackView mkd={mkdReducer4} />
			<h3>
				{"Step 3 : Write the state update 'actions' in a reducer function"}
			</h3>

			<p>SOME PARAGRAPH</p>
			<SandpackView mkd={mkdReducer5} />
			<p>SOME PARAGRAPH</p>
			<SandpackView mkd={mkdReducer6} />
			<p>SOME PARAGRAPH</p>
			<SandpackView mkd={mkdReducer7} />
		</>
	)
}

export default ChessClock
