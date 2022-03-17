import { useState } from 'react';
import './App.css';
import CreateQuiz from './modules/createQuiz/createQuiz';

function App() {
	const [appMode, changeAppMode] = useState('MainMenu');

	function renderMainSegment() {
		switch (appMode) {
			case 'CreateQuiz':
				return <CreateQuiz />
			case 'PassQuiz':
				return null;
			default:
				return <MainMenu handleChangeMode={changeAppMode}/>;
		}
	}

	return (
		<div className="App">
			<header>
				<h2>Quiz Builder Prototype</h2>
				<button onClick={() => {changeAppMode('MainMenu')}}>Return</button>
				{renderMainSegment()}
			</header>
		</div>
	);
}

function MainMenu(props) {
	console.log(props);
	const {handleChangeMode} = props;

	return (
		<main>
			<p>
				Quiz builder for practice purposes. Pls select to either create a new quiz or to use the one already created
			</p>
			<div className="control-buttons">
				<button onClick={() => {handleChangeMode('CreateQuiz')}}>
					Create Quiz
				</button>
				<button onClick={() => {handleChangeMode('PassQuiz')}}>
					Pass Quiz
				</button>
			</div>
		</main>
	)
}

export default App;
