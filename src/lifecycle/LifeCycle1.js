import React from 'react'
import ReactDOM from 'react-dom'

class LifeCycle1 extends React.Component {
	constructor() {
		super();
		this.state = {
			val:0
		}
		this.update = this.update.bind(this)
	}
	update(){
		this.setState({val:this.state.val+1})
	}
	componentWillMount() { 
		console.log('component Will Mount');
	}

	componentDidMount() { 
		console.log('component Did Mount');
	}

	componentWillUnmount() {
		console.log('Component will unmount');
	}

	render() {
		console.log('render');
		return (
		<button onClick={this.update}>{this.state.val}</button>
		)
	}

}

class ParentClass extends React.Component {
	mount(){
		ReactDOM.render(<LifeCycle1/>, document.getElementById('a'))
	}
	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}

	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>UnMount</button>
				<div id='a'></div>
			</div>
		)
	}
}

export default ParentClass