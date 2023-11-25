import './App.css'

function App() {


	return (
		<div className='wraper'>
			<h1 className='logo'>
				Redux.
			</h1>
			<div className='cash'>
				0
			</div>
			<div className='container'>
				<button>Add.</button>
				<button>Get.</button>
				<button>Add users.</button>
				<button>Remove users.</button>
			</div>
			<h2 className='empty_logo'>No users.</h2>
		</div>
	)
}

export default App

