import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from '@firebase/app';
import { Header } from './components/commons';

class App extends Component {

	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyCt_ZTdVLas0R5apu_MAW_HyulMjnors7Y",
		    authDomain: "auth3344e.firebaseapp.com",
		    databaseURL: "https://auth3344e.firebaseio.com",
		    projectId: "auth3344e",
		    storageBucket: "",
		    messagingSenderId: "75823089179"
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<Text>new App</Text>
			</View>
		);
	};
}

export default App;