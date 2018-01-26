import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NestedComponent from './components/NestedComponent'
import CustomPropTypeValidationComponent from 
'./components/CustomPropTypeValidationComponent'
import registerServiceWorker from './registerServiceWorker';
import SyntheticEventComponent from './components/SyntheticEventComponent'
import ReferenceEvents from './components/ReferenceEvents'
import LifeCycle1 from './lifecycle/LifeCycle1'
import LifeCycleWithState from './lifecycle/LifeCycleWithState'

ReactDOM.render(
	<LifeCycleWithState cat={5}/>, 
	document.getElementById('root'));
registerServiceWorker();