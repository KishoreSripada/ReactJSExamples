import React from 'react'
import ReactDOM from 'react-dom'

class ReferenceEvents extends React.Component {
	constructor() {
		super();
		this.state = {
			a:'test'
		}
	}
	update() {
		this.setState(
				{
					a:this.a.value,
					b:this.b.value,
					c:ReactDOM.findDOMNode(this.c).value,
					d:this.d.refs.input2.value
				}
			)
	}
	render() {
		return (
			<div>
				<input ref={ node => this.a = node} 
				type='text' onChange={this.update.bind(this)}/> {this.state.a} 
				<hr/>
				<input ref={ node => this.b = node}  type='text' onChange={this.update.bind(this)}/> {this.state.b} 
				<Input1 ref={ component => this.c = component} update={this.update.bind(this)}/> {this.state.c} 
				<Input2 ref={ component => this.d = component} update={this.update.bind(this)}/> {this.state.d} 
			</div>
			)
	}
}


class Input1 extends React.Component {
	render() {
		return (
			<input type="text" onChange={this.props.update}></input> 
		);
	}
}

class Input2 extends React.Component {
	render() {
		return (
			<div><input ref="input2" type="text" onChange={this.props.update}></input></div> 
		);
	}
}

export default ReferenceEvents