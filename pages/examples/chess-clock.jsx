import React from 'react'

import App from '../../components/demos/chessclock/App'

import {
	SandpackProvider,
	SandpackCodeEditor,
} from '@codesandbox/sandpack-react'
import SandpackView from '../../components/layout/page/SandpackView'

import Caption from '../../components/layout/page/Caption'
import PageEnd from '../../components/layout/page/PageEnd'

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
	mkdReducer8,
} from '../../markdowns/chessClockMkd'

const ChessClock = () => {
	return (
		<>
			<h1>Chess Clock with useReducer</h1>
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
				<span className='code'>useReducer</span>{' '}
				{' returns an array with two values, a '}
				<span className='code'>state</span>
				{', which is read only, just like the state in '}{' '}
				<span className='code'>useState</span> {' and a function'}{' '}
				<span className='code'>dispatch</span>{' '}
				{'that allows to update the state. We pass to arguments to '}{' '}
				<span className='code'>useReducer</span> {': a'}{' '}
				<span className='code'>reducer</span>{' '}
				{' function where our state updating logic will be, and an '}{' '}
				<span className='code'>initialState</span> {' value.'}
			</p>
			<SandpackView mkd={mkdReducer1} />
			<p>
				{
					'Because we want to give the players the ability to start a new game, we isolate our '
				}{' '}
				<span className='code'>initialState</span>{' '}
				{' in a constant, making the state reset simpler.'}
			</p>
			<SandpackView mkd={mkdReducer2} />
			<h3>
				Step 2 : Use dispatch functions in event handlers when state update are
				required.
			</h3>
			<p>
				{'Next we create our event handlers by simply passing the '}{' '}
				<span className='code'>dispatch</span>
				{
					' function to them. The function take a single object as an argument and we identify the action with a '
				}{' '}
				<span className='code'>type</span>{' '}
				{'. To pause the game, we simply name the type '}
				<span className='code'>{'pause'}</span>
				{'.'}
			</p>
			<SandpackView mkd={mkdReducer3} />
			<p>
				{
					'Other propreties can be passed to the action object. For instance when a timer is clicked, we need to know which, to properly update the state. Therefore in addition to a '
				}{' '}
				<span className='code'>type</span> {' we add an '}{' '}
				<span className='code'>id</span>
				{' proprety pointing to an'} <span className='code'>id</span>
				{' value passed into the event handler.'}
			</p>
			<SandpackView mkd={mkdReducer4} />
			<h3>
				{"Step 3 : Write the state update 'actions' in a reducer function"}
			</h3>
			<p>
				{'Finally we write our '} <span className='code'>reducer</span>
				{
					' function to handle the different action types defined in our handlers. In that function we pass two arguments : the '
				}{' '}
				<span>state</span> {'that we want to change, and the '}{' '}
				<span className='code'>action</span>
				{' object. The '} <span className='code'>reducer</span>{' '}
				{' works with conditionnal statements, by convention '}{' '}
				<span className='code'>switch/case</span>
				{' statements, but '} <span className='code'>if...else</span>{' '}
				{' statements work just as well.'}
			</p>
			<SandpackView mkd={mkdReducer5} />
			<p>
				{'In each '} <span className='code'>case</span>{' '}
				{
					' block we define how we want the state to be manipulated. For instance in case of an '
				}{' '}
				<span className='code'>action.type</span> {' equal to'}{' '}
				<span className='code'>{"'reset'"}</span>
				{
					' we simply want the state to be reset to its initial state. So we use our '
				}{' '}
				<span className='code'>initialState</span>
				{' constant to reinitialize both timers.'}
			</p>
			<SandpackView mkd={mkdReducer6} />
			<p>
				{
					'In case of more complex state updates, we can read the current data in state, or the values passed in our action object. Earlier we passed an '
				}{' '}
				<span className='code'>id</span> {' of '}{' '}
				<span className='code'>id</span> {' into or action object of type'}{' '}
				<span>{"'timer_clicked'"}</span>{' '}
				{
					' via our event handler. We can now use that information to properly update our '
				}{' '}
				<span className='code'>state</span> {' and define what are the '}{' '}
				<span className='code'>activePlayer</span> {' and '}{' '}
				<span className='code'>activeTimer</span>.
			</p>
			<SandpackView mkd={mkdReducer7} />
			<p>
				{'And this is it, now we can use our '}
				<span className='code'>state</span> {' to pass values to our '}{' '}
				<span className='code'>Timer</span>{' '}
				{'components, and pass event handlers as we would normally do.'}
			</p>
			<SandpackView mkd={mkdReducer8} />
			<PageEnd link={'/examples/chess-clock'} />
		</>
	)
}

export default ChessClock
