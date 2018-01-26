import React from 'react';
import propTypes from 'prop-types';

class Title extends React.Component {
	render() {
		return <h1>Title: {this.props.text}</h1>
	}
}

Title.propTypes = 
{
	text(props, propName, component) {
		if(!(propName in props)) {
			return new Error(`missing ${propName}`)
		}
		if(props[propName].length < 6) {
			return new Error(`${propName} was too short`)
		}
	}
}

export default Title;