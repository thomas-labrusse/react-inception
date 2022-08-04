import React from 'react'

import App from '../../components/demos/renderscounter/App'

import {
	SandpackProvider,
	SandpackCodeEditor,
} from '@codesandbox/sandpack-react'
import SandpackView from '../../components/layout/page/SandpackView'

import Caption from '../../components/layout/page/Caption'
import PageEnd from '../../components/layout/page/PageEnd'

import {
	mkdUseEffect,
	mkdApp,
	mkdRenders,
	mkdChild,
	mkdUseRef1,
	mkdUseRef2,
} from '../../markdowns/rendersCounterMkd'

const RendersCounter = () => {
	return (
		<div>
			<h1>Renders Counter with useRef</h1>
			<p>
				{
					'When building this website I wanted a way to track and display render counter on every components that are parts of the small demo projects. The aim was to have a visual cue of how components reacted (no pun intended) to user interactions.'
				}{' '}
			</p>

			<p>
				{'At first it would seem that the '}{' '}
				<span className='code'>useEffect</span>{' '}
				{
					' hook would be perfect for that job. It looks perfect because it allows to run a function whenever a component renders, which is exactly what we are trying to track. But the problem with '
				}{' '}
				<span className='code'>useEffect</span>{' '}
				{
					' is that to track the number of renders, we would have to store our count in state, using '
				}{' '}
				<span className='code'>useState</span>{' '}
				{
					' for instance. And updating the state triggers a render. We would end up in an infinite render / states update / render loop.'
				}
			</p>
			<SandpackView mkd={mkdUseEffect} />
			<Caption
				text={
					"Without dependency array, this code will run into an infinite loop. With dependencies, it won't run on every render."
				}
			/>
			<p>
				{'The way to go is actually to use '}
				<span className='code'>useRef</span>
				{
					". For one good reason, stated in the documentation : 'changing a ref does not trigger a re-render'."
				}
			</p>
			<div className='app-container'>
				<App />
				<Caption
					text={
						'Each component has a render counter component next to its name, that flashes and increments whenever it re-renders. They are oversized on purpose here, because they are the focus topic of this page. Increments buttons are only here to trigger state change driven re-renders.'
					}
				/>
			</div>
			<SandpackProvider
				template='react'
				files={{
					'/Renders.js': mkdRenders,
					'/App.js': mkdApp,
					'/Child.js': mkdChild,
				}}
				options={{
					visibleFiles: ['/Renders.js', '/App.js', '/Child.js'],
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
			<h2>useRef in practice</h2>
			<p>
				{'In React documentation you will find that the '}{' '}
				<span className='code'>useRef</span>{' '}
				{' hook has 3 interesting propreties :'}
			</p>
			<div className='smb'>
				<ul>
					<li>
						{
							'Unlike variables, information in refs are stored between re-renders.'
						}{' '}
					</li>
					<li>
						{
							'Unlike state variables, a ref changes will not trigger a re-render.'
						}
					</li>
					<li>
						{
							'The information is local to each instantiation of a component, not shared between them, like a variable defined inside the component.'
						}
					</li>
				</ul>
			</div>
			<h3>Creating a ref with useRef</h3>
			<p>
				{'Creating a ref with  '} <span className='code'>useRef</span>{' '}
				{
					' is very straightforward. Simply import the hook, call it and pass an '
				}{' '}
				<span className='code'>initial value</span> {' to it. Store the '}{' '}
				<span className='code'>ref object</span> {' returned by '}{' '}
				<span className='code'>useRef</span> {' into a constant.'}
			</p>
			<SandpackView mkd={mkdUseRef1} />
			<p>
				{' Now the value held in the '}{' '}
				<span className='code'>current property</span>{' '}
				{
					' of the created object is available to be read or modified. We can display the number of renders for our component, that is incremented by 1 on each render.'
				}
			</p>
			<SandpackView mkd={mkdUseRef2} />
			<p className='note'>
				{'Note : '}
				{" You'll notice that we give a "} <span className='code'>key</span>
				{' to our '} <span className='code'>span</span>{' '}
				{
					" element. If we didn't, on each render React would not evaluate any changes for this element when doing its reconciliation, an the small flashing animation would not work."
				}
				{' A changing'}
				<span className='code'>key</span>{' '}
				{
					' in this case forces the component unmount and re-mount on every render.'
				}
			</p>
			<p className='note'>
				{'Warning: '} <span className='code'>useRef</span>{' '}
				{
					' should actually not be read or modified directly during rendering, like in the last lines of code above. Only state, props and context change should change the JSX. Here we break this rule only because this is a tiny, single-purposed, development-only component.'
				}
			</p>
			<h3>Use cases for useRef</h3>
			<p>
				{'More traditionnal and safe use cases for '}{' '}
				<span className='code'>useRef</span> {' includes :'}
			</p>
			<div className='smb'>
				<ul>
					<li>{'Referencing an later read an interval to clear it.'}</li>
					<li>
						{'Manipulating the DOM by initializing '}{' '}
						<span className='code'>useRef</span> {' to'}{' '}
						<span className='code'>null</span> {' and pointing to the created '}{' '}
						<span className='code'>ref object</span> {' in a React element '}
						<span className='code'>ref</span>
						{' attribute.'}
					</li>
				</ul>
			</div>
			<PageEnd link={'/examples/renders-counter'} />
		</div>
	)
}

export default RendersCounter
